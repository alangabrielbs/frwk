import { Story, Meta } from '@storybook/react'

import Todos, { TodosProps } from '.'
import mock from './mock'

export default {
  title: 'Components/Todos',
  component: Todos,
  args: {
    todos: mock,
    name: 'Alan Gabriel'
  }
} as Meta

export const Default: Story<TodosProps> = (args) => <Todos {...args} />
