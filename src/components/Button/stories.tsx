import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Subscribe'
    },
    size: {
      control: {
        type: 'select',
        options: ['medium'],
        defaultValue: 'medium'
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

export const FullWidth: Story<ButtonProps> = (args) => <Button {...args} />

FullWidth.args = {
  fullWidth: true
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  size: 'medium',
  as: 'a',
  href: '/link'
}

export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />

Disabled.args = {
  disabled: true
}
