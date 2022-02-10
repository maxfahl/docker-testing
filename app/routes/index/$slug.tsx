import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import { getPost, Post } from '~/api/post'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post: Post = useLoaderData<Post>()
  return (
    <div className="prose">
      <h1 className="">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
