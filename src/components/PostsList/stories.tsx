import { Story, Meta } from '@storybook/react'
import { Container } from 'components/Container'

import PostsList from '.'

export default {
  title: 'Components/PostsList',
  component: PostsList
} as Meta

export const Mobile: Story = (args) => (
  <Container style={{ marginTop: 50 }}>
    <PostsList {...args} />
  </Container>
)

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile'
  }
}
