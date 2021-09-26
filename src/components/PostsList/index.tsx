import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import PostItem, { PostItemProps } from 'components/PostItem'
import TextField from 'components/TextField'
import { Search } from 'react-feather'

import useDebounce from 'hooks/useDebounce'

import * as S from './styles'
import { getAllPosts } from 'services/posts'

export type PostsListProps = {
  posts: PostItemProps[]
}

const LIMIT_POSTS_PER_PAGE = 10

const PostsList = ({ posts }: PostsListProps) => {
  const [allPosts, setAllPosts] = useState(posts)
  const [currentPage, setCurrentPage] = useState(2)

  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 600)

  const { ref, inView } = useInView({
    rootMargin: '120px'
  })

  const populateNewPosts = async () => {
    console.log('populateNewPosts')
    try {
      const newPosts = await getAllPosts(
        currentPage,
        LIMIT_POSTS_PER_PAGE,
        debouncedValue
      )

      setAllPosts((prevPosts) => [...prevPosts, ...newPosts])
    } catch {
      console.log('An error has occurred')
    }
  }

  const populatePostsSearch = async (searchValue = '') => {
    console.log('populatePostsSearch')
    try {
      const newPosts = await getAllPosts(1, LIMIT_POSTS_PER_PAGE, searchValue)

      setAllPosts(newPosts)
      setCurrentPage(0)
      setCurrentPage(2)
    } catch {
      console.log('An error has occurred')
    }
  }

  useEffect(() => {
    if (debouncedValue) {
      populatePostsSearch(debouncedValue)
    }

    console.log('searchValue', debouncedValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  useEffect(() => {
    console.log('currentPage', currentPage)
    if (currentPage) populateNewPosts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    if (inView) setCurrentPage((prevPage) => prevPage + 1)
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
