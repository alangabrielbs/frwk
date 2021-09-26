import { Container } from 'components/Container'
import Hero from 'components/Hero'
import NavBar from 'components/NavBar'
import { PostItemProps } from 'components/PostItem'
import PostsList from 'components/PostsList'
import { NextSeo } from 'next-seo'

import * as S from './styles'

export type HomeTemplateProps = {
  posts: PostItemProps[]
}

const HomeTemplate = ({ posts }: HomeTemplateProps) => {
  return (
    <>
      <NextSeo
        canonical="https://frwk.alangabriel.dev"
        openGraph={{
          url: 'https://frwk.alangabriel.dev',
          title: 'framework',
          description:
            'Com mais de 12 anos de história, somos especialistas em tecnologia e na transformação digital de grandes players do mercado. Temos em nossa essência o objetivo de construir um futuro impactante com a criação de soluções autênticas e inovadoras.',
          images: [
            {
              url:
                'https://thumbnail-poc.vercel.app/api/thumbnail.png?title=framework!&width=1280&height=720',
              width: 1280,
              height: 720,
              alt: 'framework'
            }
          ],
          site_name: 'framework'
        }}
      />
      <S.Wrapper>
        <NavBar />

        <Container>
          <Hero
            title="Thoughts, Notes & Tutorials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta."
          />

          <PostsList posts={posts} />
        </Container>
      </S.Wrapper>
    </>
  )
}

export default HomeTemplate
