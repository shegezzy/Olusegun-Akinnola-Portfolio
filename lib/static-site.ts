import path from 'path'
import { readFile } from 'fs/promises'
import { NextResponse } from 'next/server'

type StaticSiteOptions = {
  roots: string[]
  basePath: string
  htmlTransform?: (html: string) => string
  virtualFiles?: Record<
    string,
    {
      body: string | Buffer
      contentType: string
    }
  >
}

const PLACEHOLDER_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO3Zf3cAAAAASUVORK5CYII=',
  'base64',
)

const PLACEHOLDER_SVG = Buffer.from(
  [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Placeholder">',
    '<rect width="128" height="128" rx="20" fill="#e5e7eb"/>',
    '<path d="M38 84l18-22 16 18 10-12 8 10v12H38z" fill="#94a3b8"/>',
    '<circle cx="50" cy="48" r="10" fill="#cbd5e1"/>',
    '</svg>',
  ].join(''),
  'utf8',
)

function normalizeRequestPath(segments?: string[]) {
  const decoded = (segments ?? []).map((segment) => decodeURIComponent(segment))
  const joined = decoded.join('/')
  const normalized = path.posix.normalize(`/${joined}`).replace(/^\/+/, '')

  if (normalized.startsWith('..')) {
    return null
  }

  return normalized
}

function pathVariants(relPath: string) {
  const variants = new Set<string>()
  variants.add(relPath)
  variants.add(relPath.replaceAll('PwaImages', 'pwaimages'))
  variants.add(relPath.replaceAll('//', '/'))

  return Array.from(variants).filter(Boolean)
}

function contentTypeFor(filePath: string) {
  const ext = path.extname(filePath).toLowerCase()

  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8'
    case '.css':
      return 'text/css; charset=utf-8'
    case '.js':
      return 'application/javascript; charset=utf-8'
    case '.json':
      return 'application/manifest+json; charset=utf-8'
    case '.svg':
      return 'image/svg+xml'
    case '.png':
      return 'image/png'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.gif':
      return 'image/gif'
    case '.webp':
      return 'image/webp'
    case '.ico':
      return 'image/x-icon'
    case '.pdf':
      return 'application/pdf'
    case '.woff':
      return 'font/woff'
    case '.woff2':
      return 'font/woff2'
    case '.otf':
      return 'font/otf'
    case '.ttf':
      return 'font/ttf'
    default:
      return 'application/octet-stream'
  }
}

async function readFirstExistingFile(relPath: string, roots: string[]) {
  for (const variant of pathVariants(relPath)) {
    for (const root of roots) {
      const candidate = path.join(root, variant)

      try {
        const body = await readFile(candidate)
        return { body, filePath: candidate }
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
          throw error
        }
      }
    }
  }

  return null
}

function asResponse(
  body: string | Buffer,
  contentType: string,
  extraHeaders?: HeadersInit,
) {
  return new Response(body, {
    headers: {
      'content-type': contentType,
      'cache-control': 'no-cache',
      ...extraHeaders,
    },
  })
}

function buildManifest(basePath: string) {
  return JSON.stringify(
    {
      name: 'Olusegun Akinnola Portfolio',
      short_name: 'Olusegun',
      start_url: `${basePath}/`,
      scope: `${basePath}/`,
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#6E57E0',
      icons: [
        {
          src: `${basePath}/assets/img/favicons/android-chrome-192x192.png`,
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: `${basePath}/assets/img/favicons/android-chrome-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    null,
    2,
  )
}

function buildServiceWorker(basePath: string) {
  return [
    'const cacheName = "portfolio-static-cache-v1";',
    'self.addEventListener("install", (event) => {',
    '  self.skipWaiting();',
    '});',
    'self.addEventListener("activate", (event) => {',
    '  event.waitUntil(self.clients.claim());',
    '});',
    'self.addEventListener("fetch", (event) => {',
    '  if (event.request.method !== "GET") {',
    '    return;',
    '  }',
    '  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));',
    '});',
    `// Namespace: ${basePath}`,
  ].join('\n')
}

function placeholderFor(relPath: string) {
  if (relPath.endsWith('.svg')) {
    return {
      body: PLACEHOLDER_SVG,
      contentType: 'image/svg+xml',
    }
  }

  if (
    relPath.endsWith('.png') ||
    relPath.endsWith('.jpg') ||
    relPath.endsWith('.jpeg') ||
    relPath.endsWith('.webp')
  ) {
    return {
      body: PLACEHOLDER_PNG,
      contentType: 'image/png',
    }
  }

  return null
}

export async function serveStaticSite(
  pathSegments: string[] | undefined,
  options: StaticSiteOptions,
) {
  const relPath = normalizeRequestPath(pathSegments)
  const requestPath = relPath || ''

  if (!requestPath || requestPath === 'index.html') {
    const file = await readFirstExistingFile('index.html', options.roots)

    if (!file) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const html = options.htmlTransform
      ? options.htmlTransform(file.body.toString('utf8'))
      : file.body.toString('utf8')

    return asResponse(html, 'text/html; charset=utf-8')
  }

  if (options.virtualFiles?.[requestPath]) {
    const virtual = options.virtualFiles[requestPath]
    return asResponse(virtual.body, virtual.contentType)
  }

  const file = await readFirstExistingFile(requestPath, options.roots)

  if (!file) {
    const placeholder = placeholderFor(requestPath)

    if (placeholder) {
      return asResponse(placeholder.body, placeholder.contentType)
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const contentType = contentTypeFor(file.filePath)

  return asResponse(file.body, contentType)
}

export function createVirtualNamespaceFiles(basePath: string) {
  return {
    'manifest.json': {
      body: buildManifest(basePath),
      contentType: 'application/manifest+json; charset=utf-8',
    },
    'serviceWorker.js': {
      body: buildServiceWorker(basePath),
      contentType: 'application/javascript; charset=utf-8',
    },
    'serviceworker.js': {
      body: buildServiceWorker(basePath),
      contentType: 'application/javascript; charset=utf-8',
    },
  }
}
