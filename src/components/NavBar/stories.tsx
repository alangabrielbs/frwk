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
