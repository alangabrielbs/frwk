import Todo, { TodoProps } from 'components/Todo'
import { UserProps } from 'services/user'

import * as S from './styles'

export type TodosProps = {
  todos: TodoProps[]
  user: UserProps
}

const Todos = ({ todos, user }: TodosProps) => {
  const isPlural = todos.length > 1
  const numberOfTodos = `${todos.length} task${isPlural ? 's' : ''}`

  return (
    <S.Wrapper>
      <S.Header>
        <S.Name>
          Hi <b>{user.name}!</b>
        </S.Name>
        <S.NumberOfTodos>{numberOfTodos}</S.NumberOfTodos>
      </S.Header>

      <S.Todos>
        {todos.map((todo) => (
          <Todo key={todo.title} {...todo} />
        ))}
      </S.Todos>
    </S.Wrapper>
  )
}

export default Todos
