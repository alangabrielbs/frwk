import { http } from './fetcher'

export type UserProps = {
  id: number
  name: string
}

export const getUser = async (id: string): Promise<UserProps> => {
  const { data } = await http.get<UserProps>(`/users/${id}`)

  return data
}
