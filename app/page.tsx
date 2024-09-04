"use client";

import { Navbar } from "@/app/ui/landing/Navbar";
import { Hero } from "@/app/ui/landing/Hero";
import { Companies } from "@/app/ui/landing/Comapmies";
import { HighLightedVideo } from "@/app/ui/landing/Highlighted-Video";
import { FeaturesOnlyText } from "@/app/ui/landing/Features-only-text";
import { FeaturesWithimages } from "@/app/ui/landing/Features-with-images";
import { HighlightedImage } from "@/app/ui/landing/Highlighted-Image";
import { Pricing } from "@/app/ui/landing/Pricing";
import { Footer } from "@/app/ui/landing/Footer";
import highlightedVideoImg from "@/public/assets/landing/features/images/highlighted-video-image.png";
import featureImg1 from "@/public/assets/landing/features/images/image-1.png";
import featureImg2 from "@/public/assets/landing/features/images/image-2.png";
import featureImg3 from "@/public/assets/landing/features/images/image-3.png";
import featureImg4 from "@/public/assets/landing/features/images/image-4.png";

export default function Home() {
  // Videos and images for features page

  const highlightedImgVideoData = {
    img: highlightedVideoImg,
    video: "/assets/landing/features/videos/highligted-video.mp4",
    heading: "Highlight the Features",
    description: "A fully customizable landing template.",
  };

  const deaturedImgVideoData = [
    {
      img: featureImg1,
      video: "/assets/landing/features/videos/video-1.mp4",
    },
    {
      img: featureImg2,
      video: "/assets/landing/features/videos/video-2.mp4",
    },
    {
      img: featureImg3,
      video: "/assets/landing/features/videos/video-3.mp4",
    },
    {
      img: featureImg4,
      video: "/assets/landing/features/videos/video-4.mp4",
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col gap-28 items-center justify-center">
      <div className="relative upper-part-nav-and-hero flex flex-col items-center justify-center">
        {/* Gradient */}

        <div className="gradient-container top-0 z-0 absolute flex items-center w-full justify-center">
          <div className="gradint-bg relative inset-0 bg-transparent bg-gradient-to-b from-[#7f40ef] to-black blur-3xl w-3/4 h-96 opacity-75 rounded-b-[90%]"></div>
        </div>
        {/* Grids */}
        <div className="grids -z-10 absolute bg-transparent flex items-center justify-center w-full h-full overflow-clip">
          <div className="flex flex-row flex-wrap items-center justify-center w-full h-full">
            {Array.from({ length: 296 }).map((_, index) => (
              <div
                key={index}
                className="w-[20%] sm:w-[10%] md:w-[8.5%] lg:w-[7%] h-[10%] xl:h-[15%] border border-gray-900"
              ></div>
            ))}
          </div>
        </div>
        {/* Navbar */}
        <div className="top-under-warpper w-full h-fit flex flex-col gap-24 items-center justify-center">
          <div className="content-wrapper w-full max-w-screen-2xl flex flex-col gap-28">
            <div className="relative navbar w-full h-fit z-10">
              <Navbar />
            </div>
            <div className="relative hero w-full h-fit z-10">
              <Hero />
            </div>
          </div>
          <div className="companies w-full h-fit bg-black">
            <Companies />
          </div>
        </div>
      </div>

      {/* All other things in wrapper */}

      <div className="content-wrappper w-full max-w-screen-2xl flex flex-col items-center justify-center gap-36">
        <div className="companies w-full h-fit flex items-center justify-center">
          <div className="w-fit h-fit highlighted-video flex items-center justify-center">
            <HighLightedVideo videoData={highlightedImgVideoData} />
          </div>
        </div>
        <div className="features-only-text w-full h-fit flex items-center justify-center">
          <FeaturesOnlyText />
        </div>
        <div className="features-with-images w-full h-fit flex items-center justify-center">
          <FeaturesWithimages />
        </div>
      </div>

      <div className="highlighted-image w-full h-fit flex items-center justify-center">
        <HighlightedImage />
      </div>
    </div>
  );
}
