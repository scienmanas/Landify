import { Marquee } from "@/app/ui/components/marquee";
import cloudinary from "@/public/assets/landing/companies/cloudinary.png";
import googlecloud from "@/public/assets/landing/companies/googlecloud.png";
import mongodb from "@/public/assets/landing/companies/mongodb.png";
import tailwindcss from "@/public/assets/landing/companies/tailwindcss.svg";

export function Companies(): JSX.Element {
  const svgs = [cloudinary, googlecloud, mongodb, tailwindcss];

  return (
    <div className="compaies-list-floating w-full h-fit">
      <Marquee svgs={svgs} />
    </div>
  );
}
