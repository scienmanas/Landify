// Import necessary modules and types
import { MarqueeProps } from "@/app/lib/definitions"; // Type definitions for props
import Image from "next/image"; // Next.js Image component for optimized images

// Component to display a horizontal scrolling marquee of images
export function Marquee({ svgs }: MarqueeProps): JSX.Element {
  return (
    <section className="h-fit py-9 sm:px-7 dark:border-[#52525b99] border-[#bbbbbf] border-y-[1px] flex flex-row shrink overflow-hidden relative w-full dark:bg-transparent">
      {/* Gradient overlays on both sides of the marquee for a smooth scrolling effect */}
      <div className="absolute top-0 h-full bg-gradient-to-r w-[20%] z-10 dark:from-gray-800 from-neutral-200 from-20% to-transparent left-0"></div>
      <div className="absolute top-0 h-full bg-gradient-to-l w-[20%] z-10 right-0 dark:from-gray-800 from-neutral-200 from-20% to-transparent"></div>

      {/* Wrapper for the marquee content */}
      <div className="marquee-wrapper max-w-[200%] overflow-hidden flex">
        {/* First set of images in the marquee */}
        <div className="relative set-1-svg flex flex-row items-center min-w-full justify-around h-fit shrink-0 animate-scroll px-9 gap-9">
          {svgs.map((svg, index) => (
            <Image
              src={svg} // Source URL of the image
              alt="made_using" // Alt text for accessibility
              aria-hidden={true} // Hide from assistive technologies
              key={index} // Unique key for each image
              className="select-none pointer-events-none h-10 w-auto" // Styling for image
            />
          ))}
        </div>

        {/* Second set of images to create a seamless scrolling effect */}
        <div className="relative set-1-svg flex flex-row items-center min-w-full justify-around h-fit shrink-0 animate-scroll px-9 gap-9">
          {svgs.map((svg, index) => (
            <Image
              src={svg} // Source URL of the image
              alt="made_using" // Alt text for accessibility
              aria-hidden={true} // Hide from assistive technologies
              key={index} // Unique key for each image
              height={40} // Set height of images
              className="select-none pointer-events-none h-10 w-auto" // Styling for image
            />
          ))}
        </div>
      </div>
    </section>
  );
}
