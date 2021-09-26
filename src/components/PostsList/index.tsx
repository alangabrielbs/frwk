import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import PostItem, { PostItemProps } from 'components/PostItem'
import TextField from 'components/TextField'
import { Search } from 'react-feather'

import * as S from './styles'
import { getAllPosts } from 'services/posts'

export type PostsListProps = {
  posts: PostItemProps[]
}

const PostsList = ({ posts }: PostsListProps) => {
  const [allPosts, setAllPosts] = useState(posts)
  const [currentPage, setCurrentPage] = useState(2)

  const { ref, inView } = useInView({
    rootMargin: '120px'
  })

  const populateNewPosts = async () => {
    try {
      const newPosts = await getAllPosts(currentPage)

      setAllPosts((prevPosts) => [...prevPosts, ...newPosts])
    } catch {
      console.log('An error has occurred')
    }
  }

  useEffect(() => {
    populateNewPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    if (inView) setCurrentPage((prevPage) => prevPage + 1)
  }, [inView])

  return (
    <S.Wrapper>
      <TextField
        placeholder="Search for posts"
        icon={<Search />}
        iconPosition="right"
      />

      <S.SubTitle>
        <span>🔥</span> Latest posts
      </S.SubTitle>
      {allPosts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
      <S.Sentinel ref={ref} />
    </S.Wrapper>
  )
}

export default PostsList
