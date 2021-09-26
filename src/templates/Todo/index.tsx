import { Container } from 'components/Container'
import NavBar from 'components/NavBar'
import Todos, { TodosProps } from 'components/Todos'

import * as S from './styles'

const TodoTemplate = (props: TodosProps) => {
  return (
    <S.Wrapper>
      <NavBar />

      <Container>
        <Todos {...props} />
      </Container>
    </S.Wrapper>
  )
}

export default TodoTemplate
