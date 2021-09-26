import { Story, Meta } from '@storybook/react'

import InputCheck, { CheckboxProps } from '.'

export default {
  title: 'Components/InputCheck',
  component: InputCheck
} as Meta

export const Default: Story<CheckboxProps> = (args) => <InputCheck {...args} />

Default.args = {
  label: 'delectus aut autem',
  labelFor: 'checkbox-1'
}
