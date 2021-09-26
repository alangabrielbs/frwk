import { Story, Meta } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'Components/MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium" style={{ color: '#fff' }}>
    Only on Desktop
  </MediaMatch>
)
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium" style={{ color: '#fff' }}>
    Only on Mobile
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile'
  }
}
