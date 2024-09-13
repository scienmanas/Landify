import Image from "next/image";
import { BlogPostMetaDataProps } from "@/app/lib/definitions";

export function BlogCard({cardData}: BlogPostMetaDataProps): JSX.Element {
  return (
    <div className="blog-card flex flex-row flex-wrap items-center justify-center ">
      <div className="image-container w-fit h-fit cursor-pointer">
        <Image alt="blog-img" src={cardData.image}
        width={448}
        height={252}
        className="rounded-md"
        />
      </div>
      <div className="metadata w-full sm:w-fit h-fit sm:h-full flex flex-col items-start  gap-2 max-w-[408px] text-wrap" >
        <div className="heading-publishdate-readingtime">
            <div className="publish-date">{cardData.publishDate}</div>
            div.
        </div>
        <div className="description"></div>
        <div className="tags"></div>
      </div>
    </div>
  );
}
