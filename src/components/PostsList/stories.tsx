import { Story, Meta } from '@storybook/react'
import { Container } from 'components/Container'

import PostsList, { PostsListProps } from '.'
import mock from './mock'

export default {
  title: 'Components/PostsList',
  component: PostsList,
  args: {
    posts: mock
  }
} as Meta

export const Desktop: Story<PostsListProps> = (args) => (
  <Container style={{ marginTop: 50 }}>
    <PostsList {...args} />
  </Container>
)

export const Mobile: Story<PostsListProps> = (args) => (
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
