import { MdOutlineDateRange } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export function Trust(): JSX.Element {
  const headData = {
    heading: "Trusted by the world",
    subheading: "Used by everyone all over the world",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, risus id auctor placerat, sapien lorem feugiat odio, ut volutpat nisl turpis sit amet orci.",
  };

  const numberData = [
    {
      icon: MdOutlineDateRange,
      number: "1000",
      text: "Buisness",
    },
    {
      icon: IoMdCloudOutline,
      number: "200 TB",
      text: "Data saved",
    },
    {
      icon: RiContactsLine,
      number: "20K",
      text: "User",
    },
    {
      icon: FaXTwitter,
      number: "100K",
      text: "Twitter followers",
    },
  ];

  return (
    <section className="w-full h-fit flex items-center justify-center">
      <div className="content-wrapper w-fit h-fit flex items-center flex-col p-4 gap-10">
        <div className="text-wrapper w-full flex items-start">
          <div className="heading-sub-heading-description-wrapper flex w-[576px] h-fit flex-col gap-6">
            <div className="heading text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 to-neutral-300 text-lg">
              {headData.heading}
            </div>
            <div className="subheading-description flex flex-col gap-4">
              <div className="subheading font-semibold text-3xl text-neutral-200">
                {headData.subheading}
              </div>
              <div className="description text-neutral-300">
                {headData.description}
              </div>
            </div>
          </div>
        </div>
        <div className="number-flex-tab h-fit flex flex-row flex-wrap gap-4">
          {numberData.map((data, index) => (
            <div
              key={index}
              className="wrapper w-[211px] h-[166px] flex flex-col  border rounded-xl p-5 border-[#3d3d44] hover:border-purple-400 justify-between duration-300 gap-2 bg-[#1f1f22]"
            >
              <div className="icon w-full h-fit">
                <data.icon className="text-xl font-bold text-purple-200" />
              </div>
              <div className="number text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-neutral-100 text-4xl font-semibold">
                {data.number}
              </div>
              <div className="text-desc text-lg text-neutral-300">
                {data.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
