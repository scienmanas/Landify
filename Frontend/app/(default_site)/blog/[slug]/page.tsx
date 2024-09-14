import { Metadata, ResolvingMetadata } from "next";
import { getBlogPostData } from "@/app/utils/getBlogData";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IconType } from "react-icons";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

type BlogPageProps = {
  params: { slug: string };
};

type SharingLinkConfigProps = {
  name: string;
  icon: IconType;
  link: string;
  className: string;
}[];

// Dynamically generate the meta data
// export async function generateMetadata(
//   { params }: BlogPageProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return null;
//   //   return {
//   //     // title: product.title,
//   //     openGraph: {
//   //       images: ["/some-specific-page-image.jpg", ...previousImages],
//   //     },
//   //   };
// }

export default function BlogsPage({ params }: BlogPageProps): JSX.Element {
  // Get the blog data
  const blogData = getBlogPostData("blogs", params.slug);
  console.log(blogData);
  const totalWords = blogData.content.split(/\s+/).filter((element) => {
    return element.length !== 0;
  }).length;
  const readingTimeInMin = "2 min"; // per minute readtime - 240

  // All sharing format
  const sharingConfig: SharingLinkConfigProps = [
    {
      name: "whatsapp",
      icon: FaWhatsapp,
      link: "",
      className: "hover:text-green-600 dark:hover:text-green-400",
    },
    {
      name: "Mail",
      icon: IoMailOpenOutline,
      link: "",
      className: "hover:text-blue-500 dark:hover:text-blue-400",
    },
    {
      name: "Twiiter (X)",
      icon: FaXTwitter,
      link: "",
      className: "hover:text-neutral-700 dark:hover:text-neutral-300",
    },
    {
      name: "Linkedin",
      icon: FaLinkedinIn,
      link: "",
      className: "hover:text-blue-500 dark:hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "",
      className: "hover:text-blue-700 dark:hover:text-blue-500",
    },
  ];

  return (
    <section className="w-full p-4 h-fit flex items-center justify-center mt-16">
      <div className="wrapper w-full h-fit max-w-screen-xl flex items-center justify-center">
        <article className="post p-2 flex flex-col gap-6 w-[900px] h-fit items-center justify-center">
          <section className="title-time-description-and-image flex flex-col items-center justify-center w-full h-fit gap-4">
            <div className="content w-full h-fit items-start justify-start p-1 flex flex-col gap-2">
              <div className="date-and-read-and-title flex flex-col">
                <div className="date-and-read flex flex-row gap-1 text-sm sm:text-base">
                  <div className="w-fit h-fit date flex flex-row gap-1 items-center text-neutral-700 dark:text-neutral-400">
                    <FaRegClock />
                    <span className="w-fit h-fit">{blogData.publishDate}</span>
                  </div>
                  <div className="w-fit h-fit">·</div>
                  <div className="w-fit h-fit read-time text-neutral-700 dark:text-neutral-400">
                    {readingTimeInMin}
                  </div>
                </div>
                <div className="title font-bold text-2xl lg:text-5xl text-neutral-800 dark:text-neutral-200">
                  {blogData.title}
                </div>
              </div>
              <div className="description text-xl text-neutral-600 dark:text-neutral-400">
                {blogData.description}
              </div>
            </div>
            <div className="image w-fit h-fit items-center justify-center rounded-lg">
              <Image
                width={900}
                height={506}
                src={blogData.image}
                alt={`${params.slug}-image`}
                className="w-fit h-fit rounded-lg object-cover"
              />
            </div>
          </section>
          <section className="post-content-and-share h-fit w-fit flex flex-col gap-6">
            <div className="post-content text-base text-neutral-700 dark:text-neutral-300 sm:text-lg markdown ">
              <Markdown>{blogData.content}</Markdown>
            </div>
            <div className="relative tags-and-share flex flex-row flex-wrap gap-6 w-full items-center justify-between">
              <div className="tags w-fit h-fit flex flex-row gap-2 items-center">
                {blogData.tags.map((tag: string, index: number) => (
                  <div
                    key={index}
                    className="tag px-2 py-1 bg-neutral-300 text-neutral-700 dark:text-neutral-300 dark:bg-neutral-600 rounded-sm"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="share flex flex-row gap-2 w-fit h-fit items-center">
                <div className="text-share w-fit h-fit text-neutral-500 dark:text-neutral-400 font-semibold text-base sm:text-lg">
                  Share:
                </div>
                <div className="share-link-wrapper flex flex-row gap-2 w-fit h-fit">
                  {sharingConfig.map((share, index) => (
                    <Link
                      href={share.link}
                      key={index}
                      className={`${share.name} w-fit h-fit`}
                    >
                      <share.icon
                        className={`text-lg text-neutral-500 dark:text-neutral-400 ${share.className} w-fit h-fit duration-300`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="back-button w-fit mt-6">
              <button className="w-fit h-fit hover:bg-neutral-200 dark:hover:bg-neutral-700 px-3 py-3 duration-300 rounded-3xl group">
                <Link
                  href={"/blog"}
                  className="flex flex-row w-fit h-fit items-center gap-1 group"
                >
                  <IoChevronBack className="text-neutral-700 hover:text-neutral-800 dark:text-neutral-300  dark:hover:text-neutral-200 group-hover:-translate-x-1 duration-300" />
                  <span className="text-neutral-700 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-200 w-fit h-fit duration-300 ">
                    Back to blog
                  </span>
                </Link>
              </button>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
