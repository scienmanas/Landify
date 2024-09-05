import Image from "next/image";
import highlightedImg from "@/public/assets/landing/features/images/highlighted-image.png";

export function HighlightedImage(): JSX.Element {
  const highlightedImageData = {
    heading: "Lorem ipsum dolor",
    subheading: "Understand the template",
    description:
      "Data est clavis ad successum in mundo negotii moderno. App nostra praebet facilem interfacem ad omnia quae necessaria sunt.",
    image: highlightedImg,
  };

  return (
    <section className="relative w-full flex items-center justify-center py-20">
      <div className="gradient-up absolute z-20 h-full left-0 bg-transparent bg-gradient-to-br from-purple-900 to-black to-60% opacity-75 aspect-square backdrop-blur-xl w-1/2"></div>
      <div className="gradient-down absolute z-0 h-full w-1/2 right-0 bg-transparent bg-gradient-to-tl from-purple-900 to-black to-60% opacity-75"></div>
      <div className="relative z-20 content-wrapper flex flex-col gap-4 items-center justify-center w-fit h-fit">
        <div className="heading-subheading-description-wrapper flex flex-col gap-6 items-center justify-center w-[512px]">
          <div className="heading w-fit h-fit text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-purple-200 text-center text-lg ">
            {highlightedImageData.heading}
          </div>
          <div className="subheading w-fit h-fit text-center text-2xl text-neutral-200">
            {highlightedImageData.subheading}
          </div>
          <div className="description w-fit h-fit text-center text-neutral-300 text-lg">
            {highlightedImageData.description}
          </div>
        </div>
        <div className="image p-1 rounded-xl bg-transparent bg-gradient-to-br from-purple-500 to-purple-200 border-2 border-purple-900 ">
          <Image
            src={highlightedImageData.image}
            alt="image-placeholder"
            className="w-[866px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
