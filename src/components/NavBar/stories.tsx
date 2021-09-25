import { Story, Meta } from '@storybook/react'

import NavBar from '.'

export default {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Desktop: Story = (args) => <NavBar {...args} />

export const Mobile: Story = (args) => <NavBar {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile'
  }
}
