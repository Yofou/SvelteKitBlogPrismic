import * as prismic from '@prismicio/client'

const repoName = `examplesvelte` // Fill in your repository name
const accessToken = `` // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'blog_post',
    path: '/',
  },
]

const createClient = (fetch: prismic.FetchLike) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }

  const client = prismic.createClient(repoName, { fetch })
  return client
}

export default createClient
