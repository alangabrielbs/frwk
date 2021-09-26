import PostItem, { PostItemProps } from 'components/PostItem'
import TextField from 'components/TextField'
import { Search } from 'react-feather'

import * as S from './styles'

export type PostsListProps = {
  posts: PostItemProps[]
}

const PostsList = ({ posts }: PostsListProps) => (
  <S.Wrapper>
    <TextField
      placeholder="Search for posts"
      icon={<Search />}
      iconPosition="right"
    />

    <S.SubTitle>
      <span>🔥</span> Latest posts
    </S.SubTitle>
    {posts.map((post) => (
      <PostItem key={post.id} {...post} />
    ))}
  </S.Wrapper>
)

export default PostsList
