import { getAllPosts } from 'services/posts'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

export default function Home({ posts, hero }: HomeTemplateProps) {
  return <HomeTemplate posts={posts} hero={hero} />
}

export const getStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
      hero: {
        title: 'Thoughts, Notes & Tutorials',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.'
      }
    }
  }
}
