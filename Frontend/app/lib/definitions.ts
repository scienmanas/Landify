// denitions file for the project

import { StaticImageData } from "next/image";

export type MarqueeProps = {
  svgs: StaticImageData[];
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
    publishedDate: string;
    description: string;
    tags: string[];
    slug: string;
  };
};

export type submissionLoaderProps = {
  width: number;
  height: number;
  color: string;
};
