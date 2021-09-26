import { Story, Meta } from '@storybook/react'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />

Default.args = {
  label: 'delectus aut autem',
  labelFor: 'checkbox-1'
}
