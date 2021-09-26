import { Story, Meta } from '@storybook/react'
import { Container } from 'components/Container'

import PostItem, { PostItemProps } from '.'
import mock from './mock'

export default {
  title: 'Components/PostItem',
  component: PostItem,
  args: {
    ...mock
  }
} as Meta

export const Desktop: Story<PostItemProps> = (args) => (
  <Container style={{ marginTop: 40 }}>
    <PostItem {...args} />
  </Container>
)

export const Mobile: Story<PostItemProps> = (args) => (
  <Container style={{ marginTop: 40 }}>
    <PostItem {...args} />
  </Container>
)

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile'
  }
}
