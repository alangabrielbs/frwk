import { Container } from 'components/Container'
import Hero from 'components/Hero'
import NavBar from 'components/NavBar'
import { PostItemProps } from 'components/PostItem'
import PostsList from 'components/PostsList'

import * as S from './styles'

export type HomeTemplateProps = {
  posts: PostItemProps[]
}

const HomeTemplate = ({ posts }: HomeTemplateProps) => {
  return (
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
  )
}

export default HomeTemplate
