import { Story, Meta } from '@storybook/react'
import { Search } from 'react-feather'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    name: 'search',
    icon: <Search />,
    initialValue: '',
    placeholder: 'Search',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 370 }}>
    <TextField {...args} />
  </div>
)
