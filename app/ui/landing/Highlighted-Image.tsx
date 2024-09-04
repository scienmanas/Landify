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
    <section className="relative w-full flex items-center justify-center">
      <div className="gradient-up absolute"></div>
      <div className="gradient-down absolute"></div>
      <div className="content-wrapper flex flex-col gap-4 items-center justify-center">
        <div className="heading-subheading-description-wrapper flex flex-col gap-6 marker:items-center justify-center">
          <div className="heading w-fit h-fit text-transparent ">
            {highlightedImageData.heading}
          </div>
          <div className="subheading w-fit h-fit">
            {highlightedImageData.subheading}
          </div>
          <div className="description w-fit h-fit">
            {highlightedImageData.description}
          </div>
        </div>
        <div className="image">
          <Image src={highlightedImageData.image} alt="image-placeholder" />
        </div>
      </div>
    </section>
  );
}
