import { Story, Meta } from '@storybook/react'
import mock from 'components/PostItem/mock'

import Post, { PostProps } from '.'

export default {
  title: 'Components/Post',
  component: Post,
  args: {
    ...mock
  }
} as Meta

export const Desktop: Story<PostProps> = (args) => <Post {...args} />

export const Mobile: Story<PostProps> = (args) => <Post {...args} />

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile'
  }
}
