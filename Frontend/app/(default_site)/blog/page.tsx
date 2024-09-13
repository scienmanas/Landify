import { getBlogPostMetadata } from "@/app/utils/getBlogData";
import { BlogCard } from "@/app/ui/blog/blog-card";
import { BlogPostMetaDataProps } from "@/app/lib/definitions";
import Image from "next/image";

export default function Blog(): JSX.Element {
  const postMetadata = getBlogPostMetadata("blogs");
  console.log(postMetadata);

  return (
    <section className="blogs flex w-full h-fit items-center justify-center">
      <div className="wrapper w-full max-w-screen-2xl h-fit flex items-center justify-center">
        <div className="all-contents w-fit h-fit flex flex-col gap-16">
          <h1 className="hero w-fit h-fit text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-wrap text-neutral-800 dark:text-neutral-200">
            Landify Express 🖥️ ✨
          </h1>
          <p className="w-fit h-fit text-center"></p>
          <div className="blogs-card flex flex-col gap-6 w-fit h-fit">
            {postMetadata.map((metaData, index) => (
              <BlogCard key={index} cardData={metaData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
