import { NextSeoProps } from "next-seo";

export const SEO: NextSeoProps = {
  title: "frwk",
  description: "Apenas um blog para testar SEO e SSG com NextJS",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://frwk.alangabriel.dev/",
    site_name: "frwk",
    title: "frwk",
    description: "Apenas um blog para testar SEO e SSG com NextJS",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
