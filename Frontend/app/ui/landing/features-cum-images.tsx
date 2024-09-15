// Importing the Next.js Image component for optimized image rendering
import Image from "next/image";
import type { StaticImageData } from "next/image"; // Import the type for image data

// Importing images used in the features section
import image1 from "@/public/assets/landing/features/images/image-1.png";
import image2 from "@/public/assets/landing/features/images/image-2.png";
import image3 from "@/public/assets/landing/features/images/image-3.png";

// Interface defining the structure of each feature's data
interface Feature {
  heading: string;
  subheading: string;
  description: string;
  image: StaticImageData; // Type for imported images from Next.js
}

// Component that displays features with images
export function FeaturesWithImages(): JSX.Element {
  // Array containing data for each feature
  const featuresData: Feature[] = [
    {
      heading: "Lorem Ipsum Dolor",
      subheading: "Insights ad id tempore facilis",
      description:
        "Data synchronizat aut vitae laboriosam. Tempore accessus, cum 99.9% uptime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt quia laborum, perferendis aliquid autem, magnam, doloremque repellendus odio esse pariatur, tenetur odit neque qui dicta nam praesentium sint ullam!",
      image: image1,
    },
    {
      heading: "Facilis expedita",
      subheading: "Instantibus ad quas dolores",
      description:
        "Omnis integra ab eos possimus. Expedita vitae, 99.9% uptime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nesciunt quia fugit, distinctio aliquid autem, magni, sapiente quas odio esse alias laboriosam odit neque qui ipsum nam praesentium sint rerum!",
      image: image2,
    },
    {
      heading: "Ullamcorper Rutrum",
      subheading: "Semper praesentium rerum earum",
      description:
        "Vestibulum facilisis nulla. Aenean efficitur, 99.9% uptime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt quia atque, veritatis aliquid autem, mollitia, incidunt debitis odio esse commodi rerum odit neque qui eligendi nam praesentium sint dolor!",
      image: image3,
    },
  ];

  return (
    <section className="w-full h-fit flex items-center justify-center">
      <div className="content-wrapper-deep flex flex-col w-fit-h-fit items-center justify-center gap-28 p-6">
        {featuresData.map((data, index) => (
          <div
            key={index}
            className={`data-container-features flex items-center justify-evenly gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col`}
          >
            <div className="text-all w-full max-w-[494px] md:w-[45%] md:max-w-[553px] flex flex-col h-fit gap-3">
              <div className="heading w-fit h-fit text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-400 from-purple-700 dark:to-neutral-300 to-neutral-700 font-bold md:text-base text-sm">
                {data.heading}
              </div>
              <div className="subheading w-fit h-fit md:text-2xl text-xl font-semibold dark:text-neutral-100 text-neutral-900">
                {data.subheading}
              </div>
              <div className="description w-fit h-fit dark:text-neutral-400 text-neutral-800 md:text-base text-sm">
                {data.description}
              </div>
            </div>
            <div className="image w-fit md:w-[50%] h-fit">
              <Image
                src={data.image}
                alt="Feature Image"
                aria-hidden
                className="object-cover w-[400px] sm:w-[500px] rounded-xl p-1 bg-transparent bg-clip-border bg-gradient-to-tr dark:from-purple-900 from-purple-500 to-purple-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
