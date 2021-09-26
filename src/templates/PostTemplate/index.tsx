import NavBar from 'components/NavBar'
import Post from 'components/Post'

import * as S from './styles'

export type PostTemplateProps = {
  userId: number
  id: number
  title: string
  body: string
}

const PostTemplate = (props: PostTemplateProps) => {
  return (
    <S.Wrapper>
      <NavBar />

      <Post {...props} />
    </S.Wrapper>
  )
}

export default PostTemplate
