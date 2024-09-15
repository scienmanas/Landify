// --- Icon Imports from 'react-icons' Library ---
// Importing relevant icons used for displaying in the Trust section
import { MdOutlineDateRange } from "react-icons/md"; // Calendar date icon
import { IoMdCloudOutline } from "react-icons/io"; // Cloud icon
import { RiContactsLine } from "react-icons/ri"; // Contacts icon
import { FaXTwitter } from "react-icons/fa6"; // Twitter icon

// --- Type Definitions for Card Data ---
interface CardData {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  number: string;
  text: string;
}

// --- Card Component ---
// This component takes card data (icon, number, and text) as props and renders a single card.
function StatCard({ data }: { data: CardData }): JSX.Element {
  // Dynamically create the icon component
  const IconComponent = data.icon;

  return (
    <div className="wrapper w-[211px] h-[166px] flex flex-col border rounded-xl p-5 dark:border-[#3d3d44] border-[#d4d4d8] hover:border-purple-400 justify-between duration-300 gap-2 dark:bg-[#1f1f22] bg-[#ebebee]">
      {/* Icon */}
      <div className="icon w-full h-fit">
        <IconComponent className="text-xl font-bold dark:text-purple-200 text-neutral-800" />
      </div>
      {/* Number */}
      <div className="number text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-400 from-purple-700 dark:to-neutral-100 to-neutral-700 text-5xl font-semibold">
        {data.number}
      </div>
      {/* Label */}
      <div className="text-desc text-lg dark:text-neutral-300 text-neutral-800">
        {data.text}
      </div>
    </div>
  );
}

// --- Trust Component ---
// This component displays a section showcasing data points such as businesses, data saved, users, and Twitter followers.
export function Trust(): JSX.Element {
  // --- Text Data ---
  // Defines the main heading, subheading, and description for the section.
  const headData = {
    heading: "Trusted by the world", // Main heading text
    subheading: "Used by everyone all over the world", // Subheading text
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, risus id auctor placerat, sapien lorem feugiat odio, ut volutpat nisl turpis sit amet orci.", // Description text
  };

  // --- Data for Number Cards ---
  // Array of objects holding the data for each card (icon, number, and label).
  const numberData: CardData[] = [
    {
      icon: MdOutlineDateRange, // Calendar icon for 'Businesses'
      number: "1000", // Number of businesses
      text: "Businesses", // Label text
    },
    {
      icon: IoMdCloudOutline, // Cloud icon for 'Data saved'
      number: "200 TB", // Amount of data saved
      text: "Data saved", // Label text
    },
    {
      icon: RiContactsLine, // Contacts icon for 'Users'
      number: "20K", // Number of users
      text: "Users", // Label text
    },
    {
      icon: FaXTwitter, // Twitter icon for 'Twitter followers'
      number: "100K", // Number of Twitter followers
      text: "Twitter followers", // Label text
    },
  ];

  // --- JSX Structure ---
  return (
    <section className="w-full h-fit flex items-center justify-center">
      {/* Wrapper for the entire content of the Trust section */}
      <div className="content-wrapper w-fit h-fit flex items-center inset-0 flex-col p-4 gap-10">
        {/* Text Section */}
        <div className="text-wrapper w-full flex items-start">
          <div className="heading-sub-heading-description-wrapper flex w-fit text-wrap max-w-[576px] h-fit flex-col gap-6">
            {/* Heading */}
            <div className="heading text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-300 from-purple-700 dark:to-neutral-300 to-neutral-700 font-semibold md:text-lg text-base">
              {headData.heading}
            </div>
            {/* Subheading and Description */}
            <div className="subheading-description flex flex-col gap-4">
              <div className="subheading font-semibold md:text-3xl text-2xl dark:text-neutral-200 text-neutral-800">
                {headData.subheading}
              </div>
              <div className="description dark:text-neutral-300 text-neutral-700 text-sm md:text-base">
                {headData.description}
              </div>
            </div>
          </div>
        </div>

        {/* Number Cards Section */}
        <div className="number-flex-tab h-fit flex flex-row justify-center flex-wrap gap-4">
          {numberData.map((data, index) => (
            <StatCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
