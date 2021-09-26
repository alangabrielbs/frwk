import mock from 'components/PostsList/mock'
import HomeTemplate from 'templates/Home'

export default function Home() {
  return <HomeTemplate posts={mock} />
}
