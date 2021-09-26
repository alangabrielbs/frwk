import { TodoProps } from 'components/Todo'
import { http } from './fetcher'
import { getUser } from './user'

export const getAllTodosByUser = async (userId: string) => {
  const { data: todos } = await http.get(`/users/${userId}/todos/`)
  const user = await getUser(String(userId))

  return { todos, user }
}

export const getAllTodos = async (
  page = 1,
  limit = 10
): Promise<TodoProps[]> => {
  try {
    const { data } = await http.get<TodoProps[]>(
      `/todos?_page=${page}&_limit=${limit}`
    )

    return data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const changeTodoStatus = async (id: number, status: boolean) => {
  const todo = await http.patch(`/todos/${id}`, {
    completed: status
  })

  return todo
}
