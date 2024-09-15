// Importing Image component and StaticImageData type from Next.js
import Image, { StaticImageData } from "next/image";
// Importing a specific image asset
import highlightedImg from "@/public/assets/landing/features/images/highlighted-image.png";

// SpotlightImage component definition
export function SpotlightImage(): JSX.Element {
  // Defining the type for spotlight image data
  interface SpotlightImageDataTypes {
    heading: string;
    subheading: string;
    description: string;
    image: StaticImageData;
  }

  // Sample data for spotlight image
  const spotlightImageData: SpotlightImageDataTypes = {
    heading: "Lorem ipsum dolor",
    subheading: "Understand the template",
    description:
      "Data est clavis ad successum in mundo negotii moderno. App nostra praebet facilem interfacem ad omnia quae necessaria sunt.",
    image: highlightedImg,
  };

  return (
    <section className="relative w-full flex items-center justify-center py-20 p-4">
      {/* Gradient overlay on the top left */}
      <div className="gradient-up absolute z-20 h-full left-0 bg-transparent bg-gradient-to-br dark:from-purple-900 dark:to-[#18181b] from-purple-600 to-white dark:to-45% to-45% opacity-65 aspect-square w-1/2"></div>
      {/* Gradient overlay on the bottom right */}
      <div className="gradient-down absolute z-0 h-full w-1/2 right-0 bg-transparent bg-gradient-to-tl dark:from-purple-900 from-purple-600 dark:to-[#18181b] to-white dark:to-45% to-45% opacity-65 "></div>
      {/* Main content wrapper */}
      <div className="relative z-20 content-wrapper flex flex-col gap-4 items-center justify-center w-fit h-fit">
        {/* Heading, subheading, and description */}
        <div className="heading-subheading-description-wrapper flex flex-col gap-6 items-center justify-center w-fit text-wrap max-w-[512px]">
          {/* Heading text */}
          <div className="heading w-fit h-fit text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-500 dark:to-purple-200 from-purple-800 to-neutral-700 text-center text-base md:text-lg">
            {spotlightImageData.heading}
          </div>
          {/* Subheading text */}
          <div className="subheading w-fit h-fit text-center text-xl md:text-2xl dark:text-neutral-200 text-neutral-800 font-semibold">
            {spotlightImageData.subheading}
          </div>
          {/* Description text */}
          <div className="description w-fit h-fit text-center dark:text-neutral-300 text-neutral-700 md:text-lg text-sm">
            {spotlightImageData.description}
          </div>
        </div>
        {/* Image with styling */}
        <div className="image p-1 rounded-2xl bg-transparent bg-gradient-to-br from-purple-500 to-purple-200 border border-purple-900">
          <Image
            src={spotlightImageData.image}
            alt="image-placeholder"
            className="w-fit sm:w-[866px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
