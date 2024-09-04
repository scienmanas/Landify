"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";
import { IoPlayOutline } from "react-icons/io5";
interface VideoProps {
  videoData: {
    img: StaticImageData;
    video: string;
    heading: string;
    description: string;
  };
}

export function HighLightedVideo({ videoData }: VideoProps): JSX.Element {
  const [isVideoPlayed, setIsVideoPlayed] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative highlightedVideo w-full h-fit flex flex-col items-center justify-center gap-8">
      <div className="head-and-description flex flex-col gap-4 items-center justify-center">
        <h1 className="w-fit h-fit text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-200 text-lg font-bold">
          {videoData.heading}
        </h1>
        <p className="w-fit h-fit text-center text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-purple-200 to-slate-500 font-semibold">
          {videoData.description}
        </p>
      </div>
      <div className="relative video-image-placeholder border-transparent bg-clip-border bg-gradient-to-br from-purple-700 to-purple-300 border-[6px] rounded-xl w-full h-fit before:absolute before:h-[300px] before:w-full before:bg-gradient-radial before:from-purple-300 before:to-black before:blur-2xl before:content-[''] before:right-14 before:-top-14 after:absolute after:h-[300px] after:w-full after:bg-gradient-radial after:from-purple-300 after:to-black after:blur-2xl after:content-[''] after:left-14 after:-bottom-12 after:z-0 ">
        {!isVideoPlayed && (
          <div className="relative z-10 placehold-image w-[800px] flex items-center justify-center">
            <Image
              className="w-full relative"
              src={videoData.img}
              alt="placeholder-img"
            />
            <button
              onClick={() => {
                setIsVideoPlayed(true);
                videoRef.current?.play();
              }}
              className="absolute z-10 p-4 w-full h-full flex items-center justify-center group"
            >
              <div className="relative w-fit h-fit flex justify-center items-center group">
                <div className="z-0 absolute shadow-pulsing bg-transparent bg-gradient-radial w-[120%] h-[120%] blur-2xl group-hover:w-[150%] group-hover:h-[150%] "></div>
                <IoPlayOutline className=" relative z-10 text-6xl border-[3px] w-fit h-fit p-4 rounded-full flex items-center justify-center border-purple-300 group-hover:scale-105 duration-300 " />
              </div>
            </button>
          </div>
        )}
        <div
          className={`relative z-10 actual-video w-fit h-fit ${
            isVideoPlayed ? "flex" : "hidden"
          }`}
        >
          <video
            ref={videoRef}
            preload="auto"
            controls
            className="w-[800px] h-auto rounded-lg"
          >
            <source src={videoData.video} type="video/mp4" />
            {/* <track /> If you have subtitles you can set it */}
          </video>
        </div>
      </div>
    </div>
  );
}
