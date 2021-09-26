import { GetStaticProps } from 'next'

import { getAllTodos, getAllTodosByUser } from 'services/todos'
import TodoTemplate from 'templates/Todo'
import { TodosProps } from 'components/Todos'

export default function Todo(props: TodosProps) {
  return <TodoTemplate {...props} />
}

export async function getStaticPaths() {
  const posts = await getAllTodos(0, 10)

  const paths = posts.map(({ id }) => ({
    params: { userId: String(id) }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const todos = await getAllTodosByUser(`${params?.userId}`)

  if (!todos) return { notFound: true }

  return {
    props: {
      ...todos
    }
  }
}
