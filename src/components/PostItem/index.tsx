import Link from 'next/link'

import * as S from './styles'

export type PostItemProps = {
  userId: number
  id: number
  title: string
  body: string
}

const PostItem = ({ body, id, title }: PostItemProps) => (
  <S.Wrapper>
    <Link href={String(id)}>
      <a>
        <S.Title>{title}</S.Title>
        <S.Description>{body}</S.Description>
      </a>
    </Link>
  </S.Wrapper>
)

export default PostItem
