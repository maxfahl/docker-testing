import path from 'path'
import fs from 'fs/promises'
// import parseFrontMatter from 'front-matter'
import invariant from 'tiny-invariant'
import { gql, GraphQLClient } from 'graphql-request';
import { json } from 'stream/consumers';
// import { marked } from 'marked'

const GetRequestsQuery = gql`
	query {
		allRequests {
			title
			description
		}
	}
`;

export type Request = {
  id: string
  title: string
  description: string
}

// export type PostMarkdownAttributes = {
//   title: string
// }

// // relative to the server output not the source!
// const postsContentPath = path.join(__dirname, '..', 'content', 'posts')

// function isValidPostAttributes(attributes: any): attributes is PostMarkdownAttributes {
//   return attributes?.title
// }

export async function getRequests() {
	const client = new GraphQLClient(
		"http://localhost:8000/graphql"
	);

	const { requests } = await client.request(GetRequestsQuery);

	return json({ requests });

  // const dir = await fs.readdir(postsContentPath)
  // return Promise.all(
  //   dir.map(async filename => {
  //     const file = await fs.readFile(path.join(postsContentPath, filename))
  //     const { attributes } = parseFrontMatter(file.toString())
  //     invariant(isValidPostAttributes(attributes), `${filename} has bad meta data!`)
  //     return {
  //       slug: filename.replace(/\.md$/, ''),
  //       title: attributes.title,
  //     }
  //   })
  // )
}

export async function getRequest(slug: string) {
  // const filepath = path.join(postsContentPath, slug + '.md')
  // const file = await fs.readFile(filepath)
  // const { attributes, body } = parseFrontMatter(file.toString())
  // invariant(isValidPostAttributes(attributes), `Post ${filepath} is missing attributes`)
  // const html = marked(body)
  // return { slug, html, title: attributes.title }
	return {id: "bajs", title: "bajs", description: "bajs"}
}

type NewPost = {
  title: string
  slug: string
  markdown: string
}

export async function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`
  await fs.writeFile(path.join(postsContentPath, post.slug + '.md'), md)
  return getPost(post.slug)
}
