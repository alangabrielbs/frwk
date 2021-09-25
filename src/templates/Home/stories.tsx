import { Story, Meta } from '@storybook/react'

import Home from '.'

export default {
  title: 'Template/Home',
  component: Home
} as Meta

export const Desktop: Story = (args) => <Home {...args} />

export const Mobile: Story = (args) => <Home {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile'
  }
}
