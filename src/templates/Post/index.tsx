import NavBar from 'components/NavBar'
import Post, { PostProps } from 'components/Post'
import { NextSeo } from 'next-seo'

import * as S from './styles'

export type PostTemplateProps = {
  post: PostProps
}

const PostTemplate = ({ post }: PostTemplateProps) => {
  return (
    <>
      <NextSeo
        title={`${post.title} - fwrk`}
        description={post.body}
        canonical="https://frwk.alangabriel.dev"
        openGraph={{
          url: 'https://frwk.alangabriel.dev',
          title: 'frwk',
          description: post.body,
          images: [
            {
              url: `https://thumbnail-poc.vercel.app/api/thumbnail.png?title=${post.title}&width=1280&height=720`,
              width: 1280,
              height: 720,
              alt: 'frwk'
            }
          ],
          site_name: 'frwk'
        }}
      />
      <S.Wrapper>
        <NavBar />

        <Post {...post} />
      </S.Wrapper>
    </>
  )
}

export default PostTemplate
