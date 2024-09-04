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
    <section className="w-full h-fit flex flex-row ">
      <div className="content-wrapper flex w-fit h-fit flex-row flex-wrap gap-6 justify-center">
        {featuresData.map((data, index) => (
          <div className="card-wrapper flex flex-col w-[454px] h-fit gap-2">
            <div className="head-and-icon flex flex-row gap-2 w-fit h-fit items-center">
              <div className="icon w-fit h-fit text-purple-300 flex items-center">
                <data.icon className="text-lg" />
              </div>
              <div className="head text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-neutral-400">{data.heading}</div>
            </div>
            <div className="description">{data.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
