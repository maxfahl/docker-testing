import { Link, useLoaderData } from '@remix-run/react'
import { getPosts, Post } from '~/api/post'

export const loader = async () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()

  return (
    <div className="prose">
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
