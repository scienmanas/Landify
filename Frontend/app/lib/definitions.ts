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
    image: StaticImageData;
    publishDate: string;
    description: string;
    tage: string[];
    slug: string;
  };
};
