import NavBar from 'components/NavBar'
import Post, { PostProps } from 'components/Post'

import * as S from './styles'

export type PostTemplateProps = {
  post: PostProps
}

const PostTemplate = ({ post }: PostTemplateProps) => {
  return (
    <S.Wrapper>
      <NavBar />

      <Post {...post} />
    </S.Wrapper>
  )
}

export default PostTemplate
