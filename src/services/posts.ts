import { PostProps } from 'components/Post'
import { http } from './fetcher'
import { getUser } from './user'

export const getAllPosts = async (
  page = 1,
  limit = 10
): Promise<PostProps[]> => {
  try {
    const { data } = await http.get<PostProps[]>(
      `/posts?_page=${page}&_limit=${limit}`
    )

    return data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getPost = async (id: string): Promise<PostProps> => {
  const { data: post } = await http.get<PostProps>(`/posts/${id}`)

  const user = await getUser(String(post.userId))

  return {
    ...post,
    user
  }
}
