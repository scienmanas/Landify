import { getBlogPostMetadata } from "@/app/utils/getBlogData";
import { BlogCard } from "@/app/ui/blog/blog-card";
import { Metadata } from "next";
import metaDataImg from "@/public/assets/metadata/blog/display.png";

// Generate the meta data
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.DOMAIN as string),
    title: `Blogs - ${process.env.SITE_NAME}`,
    description: "Read the blogs, discover phenomenal things happeing around",
    keywords: ["reading", "article", "tech", "knowledge"],
    robots: "index, follow",
    openGraph: {
      title: `Blogs - ${process.env.SITE_NAME}`,
      description: "Read the blogs, discover phenomenal things happeing around",
      url: `${process.env.DOMAIN}/blog`,
      images: [metaDataImg.src],
      type: "article",
      siteName: `${process.env.SITE_NAME}`,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Blogs - ${process.env.SITE_NAME}`,
      description: "Read the blogs, discover phenomenal things happeing around",
      images: [metaDataImg.src],
      creator: "@ScientistManas",
    },
  };
}

export default function Blog(): JSX.Element {
  const postMetadata = getBlogPostMetadata("blogs");

  return (
    <section className="blogs flex w-full h-fit items-center justify-center mt-20 sm:mt-24 p-4">
      <div className="wrapper w-full max-w-screen-2xl h-fit flex items-center justify-center">
        <div className="all-contents w-fit h-fit flex flex-col gap-20 md:gap-24 items-center justify-center">
          <div className="hero-and-description flex flex-col gap-1 items-center justify-center">
            <h1 className="hero w-fit h-fit text-2xl sm:text-3xl md:text-4xl font-bold text-center text-wrap text-neutral-800 dark:text-neutral-200">
              Landify Express 🖥️ ✨
            </h1>
            <p className="w-fit h-fit text-center text-sm sm:text-base text-neutral-700 dark:text-neutral-400">
              From Customer reviews to getting started all things convered.
            </p>
          </div>
          <div className="blogs-card flex flex-col gap-16 w-fit h-fit items-center justify-center">
            {postMetadata.map((metaData, index) => (
              <BlogCard key={index} cardData={metaData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
