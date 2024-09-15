// Import the Marquee component and image assets
import { Marquee } from "@/app/ui/components/marquee";
import cloudinary from "@/public/assets/landing/companies/cloudinary.png";
import googlecloud from "@/public/assets/landing/companies/googlecloud.png";
import mongodb from "@/public/assets/landing/companies/mongodb.png";
import tailwindcss from "@/public/assets/landing/companies/tailwindcss.svg";
import { StaticImageData } from "next/image";

// Define the interface for the props passed to the Marquee component
interface MarqueeProps {
  svgs: StaticImageData[]; // Array of image data for the Marquee component
}

// Component that displays a list of company logos using the Marquee component
export function Companies(): JSX.Element {
  // Array of SVG and image assets representing different companies
  const svgs: StaticImageData[] = [
    cloudinary,
    googlecloud,
    mongodb,
    tailwindcss,
  ];

  return (
    <div className="compaies-list-floating w-full h-fit">
      {/* Pass the array of company logos to the Marquee component */}
      <Marquee svgs={svgs} />
    </div>
  );
}
