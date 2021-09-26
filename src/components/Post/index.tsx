import { Container } from 'components/Container'
import Link from 'next/link'
import { ArrowLeft } from 'react-feather'

import * as S from './styles'

export type PostProps = {
  userId: number
  id: number
  title: string
  body: string
}

const Post = ({ body, title }: PostProps) => (
  <S.Wrapper>
    <Container>
      <Link href="/">
        <S.LinkBack>
          <ArrowLeft size={18} />
          Back to listing
        </S.LinkBack>
      </Link>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.WrapperInfo>
          <S.Author>Alan Gabriel</S.Author>
          <S.Time>08 de maio de 2021</S.Time>
        </S.WrapperInfo>
      </S.Header>
    </Container>

    <S.Divider />

    <Container>
      <S.Content>{body}</S.Content>
      <S.Content>{body}</S.Content>
      <S.Content>{body}</S.Content>
    </Container>
  </S.Wrapper>
)

export default Post
