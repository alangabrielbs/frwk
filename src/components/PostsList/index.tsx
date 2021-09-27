import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import PostItem, { PostItemProps } from 'components/PostItem'
import TextField from 'components/TextField'
import { Search } from 'react-feather'

import useDebounce from 'hooks/useDebounce'

import * as S from './styles'
import { getAllPosts } from 'services/posts'
import { scrollTop } from 'utils/scroll'

export type PostsListProps = {
  posts: PostItemProps[]
}

const LIMIT_POSTS_PER_PAGE = 10

const PostsList = ({ posts }: PostsListProps) => {
  const [allPosts, setAllPosts] = useState(posts)
  const [currentPage, setCurrentPage] = useState(1)
  const [alreadyTyped, setAlreadyTyped] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 600)

  const { ref, inView } = useInView({
    rootMargin: '120px'
  })

  const populateNewPosts = async (page: number, value = '') => {
    try {
      const newPosts = await getAllPosts(page, LIMIT_POSTS_PER_PAGE, value)

      setAllPosts((prevPosts) =>
        page === 1 ? newPosts : [...prevPosts, ...newPosts]
      )
    } catch {
      console.log('An error has occurred')
    }
  }

  useEffect(() => {
    if (debouncedValue) {
      setAlreadyTyped(true)
      setCurrentPage(1)
      populateNewPosts(1, debouncedValue)
      scrollTop(300)
    }

    if (!debouncedValue && alreadyTyped) {
      scrollTop(300)
      setAlreadyTyped(false)
      setCurrentPage(1)
      populateNewPosts(1)
    }
  }, [debouncedValue, alreadyTyped])

  useEffect(() => {
    if (inView) {
      setCurrentPage(currentPage + 1)

      if (!debouncedValue) populateNewPosts(currentPage + 1)
      if (debouncedValue) populateNewPosts(currentPage + 1, debouncedValue)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <S.Wrapper>
      <TextField
        value={searchValue}
        onInputChange={setSearchValue}
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
