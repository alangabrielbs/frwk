import { getAllPosts } from 'services/posts'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

export default function Home({ posts }: HomeTemplateProps) {
  return <HomeTemplate posts={posts} />
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    }
  }
}
