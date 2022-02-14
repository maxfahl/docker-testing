import { Link, useLoaderData } from '@remix-run/react'
import { getRequests, Request } from '~/api/request'

export const loader = async () => {
  return getRequests()
}

export default function Posts() {
  const requests = useLoaderData<Request[]>()

  return (
    <div className="prose">
      <h1>Posts</h1>
      <ul>
        {requests.map((request: Request) => (
          <li key={request.id}>
            <Link to={request.title}>{request.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
