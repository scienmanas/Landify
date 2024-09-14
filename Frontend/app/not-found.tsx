import Link from "next/link";
import { Metadata } from "next";

// Generate meta data for the page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `404 - ${process.env.SITE_NAME}`,
    description:
      "Error, the specified URL cannot be found, please check the url and try again",
    openGraph: {
      title: `404 - ${process.env.SITE_NAME}`,
      description:
        "Error, the specified URL cannot be found, please check the url and try again",
    },
    twitter: {
      title: `404 - ${process.env.SITE_NAME}`,
      description:
        "Error, the specified URL cannot be found, please check the url and try again",
    },
  };
}

export default function NotFound(): JSX.Element {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="content-wrapper w-fit h-fit flex flex-col items-center max-w-[448px] text-wrap gap-4 p-4">
        <div className="error-code w-fit h-fit text-center text-wrap font-extrabold text-6xl sm:text-8xl dark:text-purple-500 text-purple-700 animate-pulse">
          404
        </div>
        <div className="regrets-and-console-text w-fit h-fit flex flex-col items-center justify-center gap-2">
          <div className="regret-text w-fit h-fit text-center text-wrap font-bold text-neutral-800 dark:text-neutral-200 text-2xl">
            Sorry 😔, we couldn't find this page.
          </div>
          <div className="console-person w-fit h-fit text-center text-wrap text-neutral-600 dark:text-neutral-400">
            But don't worry, you can find plenty of other things on our
            homepage.
          </div>
        </div>
        <Link href={"/"} className="w-fit h-fit mt-4">
          <button className="return-to-home w-fit h-fit px-5 py-4 rounded-[30px] bg-transparent dark:bg-transparent text-neutral-700 border border-[#9ea5b0] hover:bg-neutral-200 hover:border-neutral-600 hover:text-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:text-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500 duration-300">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
