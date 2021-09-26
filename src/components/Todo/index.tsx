import { useState } from 'react'

import Checkbox from 'components/Checkbox'
import * as S from './styles'
import { changeTodoStatus } from 'services/todos'

export type TodoProps = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Todo = ({ completed, id, title }: TodoProps) => {
  const [checked, setChecked] = useState(completed)

  const handleChange = async () => {
    const status = !checked
    setChecked(status)

    try {
      await changeTodoStatus(id, status)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Todo isChecked={checked}>
      <Checkbox
        label={title}
        labelFor={String(id)}
        isChecked={checked}
        onCheck={handleChange}
      />
    </S.Todo>
  )
}

export default Todo
