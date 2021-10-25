import { Container } from "components/Container";
import Hero, { HeroProps } from "components/Hero";
import NavBar from "components/NavBar";
import { PostItemProps } from "components/PostItem";
import PostsList from "components/PostsList";
import { NextSeo } from "next-seo";

import * as S from "./styles";

export type HomeTemplateProps = {
  posts: PostItemProps[];
  hero: HeroProps;
};

const HomeTemplate = ({ posts }: HomeTemplateProps) => {
  return (
    <>
      <NextSeo
        canonical="https://frwk.alangabriel.dev"
        openGraph={{
          url: "https://frwk.alangabriel.dev",
          title: "frwk",
          images: [
            {
              url: "https://thumbnail-poc.vercel.app/api/thumbnail.png?title=frwk!&width=1280&height=720",
              width: 1280,
              height: 720,
              alt: "frwk",
            },
          ],
          site_name: "frwk",
        }}
      />
      <S.Wrapper>
        <NavBar />

        <Container>
          <Hero
            title="Thoughts, Notes & Tutorials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra hendrerit placerat. Nunc dictum nunc fermentum leo blandit porta."
          />

          <PostsList posts={posts} />
        </Container>
      </S.Wrapper>
    </>
  );
};

export default HomeTemplate;
