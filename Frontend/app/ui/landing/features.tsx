import { CiCalendar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { MdOutlineApps } from "react-icons/md";
import { FaMagic } from "react-icons/fa";
import { SiGitconnected } from "react-icons/si";

export function FeaturesOnlyText(): JSX.Element {
  const featuresData = [
    {
      icon: CiCalendar,
      heading: "Connect all your contacts",
      description:
        "Sync with your calendar apps and contacts. Google, Outlook, ProtonMail, and more.",
    },
    {
      icon: FaRegHeart,
      heading: "Dashboards for all businesses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus rerum, reiciendis quisquam cum sunt.",
    },
    {
      icon: CiCloudOn,
      heading: "Synced to the cloud",
      description:
        "Your data is accessible from everywhere, syncing across all your devices.",
    },
    {
      icon: MdOutlineApps,
      heading: "Your business intelligence, simplified",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus rerum.",
    },
    {
      icon: FaMagic,
      heading: "Real-time insights at your fingertips",
      description:
        "Data syncs across your team instantly. Real-time access, with 99.9% uptime.",
    },
    {
      icon: SiGitconnected,
      heading: "Connects to popular apps",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam delectus rerum, reiciendis quisquam cum sunt.",
    },
  ];

  return (
    <section className="w-full h-fit flex flex-row items-center justify-center">
      <div className="content-wrapper flex w-fit h-fit sm:flex-row flex-col sm:flex-wrap gap-6 justify-center p-4">
        {featuresData.map((data, index) => (
          <div
            key={index}
            className="card-wrapper flex flex-col w-fit text-wrap max-w-[454px] h-fit gap-2"
          >
            <div className="head-and-icon flex flex-row gap-2 w-fit h-fit items-center">
              <div className="icon w-fit h-fit text-neutral-800 dark:text-neutral-200 flex items-center">
                <data.icon className="md:text-lg text-base" />
              </div>
              <div className="head text-base md:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br dark:from-purple-200 from-purple-800 to-black dark:to-neutral-400">
                {data.heading}
              </div>
            </div>
            <div className="description text-neutral-800 dark:text-neutral-200 md:text-base text-sm">
              {data.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
