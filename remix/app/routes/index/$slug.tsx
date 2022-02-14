import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import { getRequest, Request } from '~/api/request'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getRequest(params.slug)
}

export default function PostSlug() {
  const request: Request = useLoaderData<Request>()
  return (
    <div className="prose">
      <h1 className="">{request.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: request.description }} />
    </div>
  )
}
