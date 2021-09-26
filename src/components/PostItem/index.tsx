import Link from 'next/link'

import * as S from './styles'

export type PostItemProps = {
  userId: number
  id: number
  title: string
  description: string
}

const PostItem = ({ description, id, title }: PostItemProps) => (
  <S.Wrapper>
    <Link href={String(id)}>
      <a>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </a>
    </Link>
  </S.Wrapper>
)

export default PostItem
