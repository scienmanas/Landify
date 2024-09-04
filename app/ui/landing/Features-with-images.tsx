import Image from "next/image";
import image1 from "@/public/assets/landing/features/images/image-1.png";
import image2 from "@/public/assets/landing/features/images/image-2.png";
import image3 from "@/public/assets/landing/features/images/image-3.png";

export function FeaturesWithimages(): JSX.Element {
  const FeaturesData = [
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
        {FeaturesData.map((data, index) => (
          <div
            className={`data-conatiner-features flex items-center justify-evenly gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col`}
          >
            <div className="text-all w-full max-w-[494px] md:w-[45%] md:max-w-[553px] flex flex-col h-fit gap-3">
              <div className="heading w-fit h-fit text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-neutral-300 font-bold">
                {data.heading}
              </div>
              <div className="subheading w-fit h-fit text-2xl font-semibold text-neutral-100">
                {data.subheading}
              </div>
              <div className="description w-fit h-fit text-neutral-400">
                {data.description}
              </div>
            </div>
            <div className="image w-fit md:w-[50%] h-fit">
              <Image
                src={data.image}
                alt="image-holder"
                aria-hidden
                className="object-cover w-[400px] sm:w-[500px] rounded-lg p-1 bg-transparent bg-clip-border bg-gradient-to-tr from-purple-900 to-purple-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
