import { StaticImageData } from "next/image";

export type MarqueeProps = {
  svgs: string[];
};

export type FeaturesOnlyTextProps = {
  FeaturesOnlyTextData: {
    icon: string;
    heading: string;
    description: string;
  }[];
};

export type BlogPostMetaDataProps = {
  cardData: {
    title: string;
    image: string;
    publishDate: string;
    description: string;
    tags: string[];
    slug: string;
  };
};
