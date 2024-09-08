import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/assets/logo/logo.png";

export function Navbar(): JSX.Element {
  const tabs = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Blogs",
      link: "/blogs",
    },
    {
      text: "Community",
      link: "/community",
    },
    {
      text: "Pricing",
      link: "#pricing",
    },
  ];

  return (
    <nav className="relative flex p-4 flex-row justify-between ">
      <div className="logo-place flex flex-row gap-2 items-center">
        <Link href={"/"} className="w-fit h-fit">
          <Image src={logoImg} alt="logo" width={25} height={25} className="" />
        </Link>
        <div className="text-company font-bold">Landify</div>
      </div>
      <div className="hidden hamburger"></div>
      <div className="link-tabs w-fit h-fit flex flex-row gap-2 items-center">
        <ul className="flex w-fit h-fit gap-2 flex-row">
          {tabs.map((tab, index) => (
            <li key={index}>
              <Link href={tab.link} className="text-neutral-300">
                {tab.text}
              </Link>
            </li>
          ))}
        </ul>
        <button>Mode</button>
        <button className="px-3 py-2 bg-transparent bg-gradient-to-tr from-[#7f40ef] to-[#a47aed] rounded-md text-bl font-semibold hover:from-[#7a47d4] hover:to-[#9767ea] transition-colors duration-300 transform text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}
