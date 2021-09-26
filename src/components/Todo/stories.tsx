import { Story, Meta } from '@storybook/react'

import Todo, { TodoProps } from '.'

export default {
  title: 'Components/Todo',
  component: Todo,
  args: {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  }
} as Meta

export const Default: Story<TodoProps> = (args) => <Todo {...args} />

export const StartMarked: Story<TodoProps> = (args) => <Todo {...args} />

StartMarked.args = {
  completed: true
}
