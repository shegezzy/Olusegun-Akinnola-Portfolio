import path from 'path'
import { serveStaticSite, createVirtualNamespaceFiles } from '../../../lib/static-site'

export const runtime = 'nodejs'

function transformHtml(html: string) {
  return html.replace('<head>', '<head><base href="/v2/">')
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  const { path: routePath } = await params

  return serveStaticSite(routePath, {
    roots: [path.join(process.cwd(), 'v2/public'), path.join(process.cwd(), 'v2')],
    basePath: '/v2',
    htmlTransform: transformHtml,
    virtualFiles: createVirtualNamespaceFiles('/v2'),
  })
}
