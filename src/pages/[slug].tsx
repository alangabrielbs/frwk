import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { getAllPosts, getPost } from 'services/posts'
import PostTemplate, { PostTemplateProps } from 'templates/Post'

export default function Post({ post }: PostTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PostTemplate post={post} />
}

export async function getStaticPaths() {
  const posts = await getAllPosts(0, 20)

  const paths = posts.map(({ id }) => ({
    params: { slug: String(id) }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(`${params?.slug}`)

  if (!post) return { notFound: true }

  return {
    props: {
      post
    }
  }
}
