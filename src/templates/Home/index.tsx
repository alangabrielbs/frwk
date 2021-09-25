import { Container } from 'components/Container'
import Hero from 'components/Hero'
import NavBar from 'components/NavBar'

import * as S from './styles'

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <NavBar />

      <Container>
        <Hero
          title="Thoughts, Notes & Tutorials"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta."
        />
      </Container>
    </S.Wrapper>
  )
}

export default HomeTemplate
