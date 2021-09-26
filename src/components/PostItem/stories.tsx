import { Story, Meta } from '@storybook/react'
import { Container } from 'components/Container'

import PostItem, { PostItemProps } from '.'
import mock from './mock'

export default {
  title: 'Components/PostItem',
  component: PostItem
} as Meta

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

Mobile.args = mock
