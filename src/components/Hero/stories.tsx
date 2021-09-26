import { Story, Meta } from '@storybook/react'
import { Container } from 'components/Container'

import Hero, { HeroProps } from '.'

export default {
  title: 'Components/Hero',
  component: Hero,
  args: {
    title: 'Thoughts, Notes & Tutorials',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.'
  }
} as Meta

export const Default: Story<HeroProps> = (args) => (
  <Container>
    <Hero {...args} />
  </Container>
)

export const Mobile: Story<HeroProps> = (args) => (
  <Container>
    <Hero {...args} />
  </Container>
)

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile'
  }
}
