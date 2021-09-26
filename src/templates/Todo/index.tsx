import { NextSeo } from 'next-seo'
import { Container } from 'components/Container'
import NavBar from 'components/NavBar'
import Todos, { TodosProps } from 'components/Todos'

import * as S from './styles'

const TodoTemplate = (props: TodosProps) => {
  return (
    <>
      <NextSeo
        title={`todo of ${props.user.name} - framewotk`}
        canonical="https://frwk.alangabriel.dev"
        openGraph={{
          url: 'https://frwk.alangabriel.dev',
          title: 'framework',
          images: [
            {
              url: `https://thumbnail-poc.vercel.app/api/thumbnail.png?title=to-do%20of%20${props.user.name}&width=1280&height=720`,
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
          <Todos {...props} />
        </Container>
      </S.Wrapper>
    </>
  )
}

export default TodoTemplate
