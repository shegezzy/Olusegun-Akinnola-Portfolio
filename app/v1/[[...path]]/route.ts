import path from 'path'
import { serveStaticSite, createVirtualNamespaceFiles } from '../../../lib/static-site'

export const runtime = 'nodejs'

function transformHtml(html: string) {
  let output = html.replace('<head>', '<head><base href="/v1/">')
  output = output.replaceAll(/(["'])\/assets\//g, '$1/v1/assets/')
  output = output.replaceAll('/v1/assets//', '/v1/assets/')
  output = output.replaceAll('register("/serviceWorker.js")', 'register("/v1/serviceWorker.js")')
  output = output.replaceAll('register(\'/serviceWorker.js\')', 'register(\'/v1/serviceWorker.js\')')
  return output
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  const { path: routePath } = await params

  return serveStaticSite(routePath, {
    roots: [path.join(process.cwd(), 'v1'), path.join(process.cwd(), 'v2'), path.join(process.cwd(), 'v2/public')],
    basePath: '/v1',
    htmlTransform: transformHtml,
    virtualFiles: createVirtualNamespaceFiles('/v1'),
  })
}
