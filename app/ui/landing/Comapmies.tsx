import { Marquee } from "@/app/ui/components/Marquee";
import { MarqueeProps } from "@/app/lib/definitions";
import aws from "@/public/assets/landing/companies/aws.png";
import cloudinary from "@/public/assets/landing/companies/cloudinary.png";
import github from "@/public/assets/landing/companies/github.png";
import googlecloud from "@/public/assets/landing/companies/googlecloud.png";
import mongodb from "@/public/assets/landing/companies/mongodb.png";
import nextjs from "@/public/assets/landing/companies/nextjs.png";
import tailwindcss from "@/public/assets/landing/companies/tailwindcss.svg";

export function Companies(): JSX.Element {
  const svgs = [
    aws,
    cloudinary,
    github,
    googlecloud,
    mongodb,
    nextjs,
    tailwindcss,
  ];

  return (
    <div className="compaies-list-floating w-full h-fit">
      <Marquee svgs={svgs} />
    </div>
  );
}
