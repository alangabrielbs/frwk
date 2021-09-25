import { Story, Meta } from '@storybook/react'

import Hero, { HeroProps } from '.'

export default {
  title: 'Components/Hero',
  component: Hero
} as Meta

export const Default: Story<HeroProps> = (args) => <Hero {...args} />

Default.args = {
  title: 'Thoughts, Notes & Tutorials',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.'
}

export const Mobile: Story<HeroProps> = (args) => <Hero {...args} />

Mobile.args = {
  title: 'Thoughts, Notes & Tutorials',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta.'
}

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile'
  }
}
