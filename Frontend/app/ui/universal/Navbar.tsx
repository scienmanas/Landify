"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/assets/logo/logo.png";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHamburgerOpened, setIsHamburgerOpened] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [websiteTheme, setWebsiteTheme] = useState<string>("light");

  const tabs = [
    { text: "About", link: "#hero" },
    { text: "Blogs", link: "/blog" },
    { text: "Community", link: "/community" },
    { text: "Pricing", link: "#pricing" },
  ];

  // Add border and backdrop blur when the user scrolls to the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set mounted state to true after the component has mounted
  useEffect(() => {
    setMounted(true);
    if (theme) {
      setWebsiteTheme(theme); // Set the website theme based on next-themes
    }
  }, [theme]);

  // Change the theme between light and dark
  const toggleTheme = () => {
    const newTheme = websiteTheme === "dark" ? "light" : "dark";
    setWebsiteTheme(newTheme);
    setTheme(newTheme); // Update the theme using next-themes
  };

  return (
    <nav
      className={`w-full h-fit flex items-center justify-center  dark:bg-neutral-800 bg-[#c9c9ca] transition-all duration-300 border-b border-transparent
    ${
      isScrolled
        ? "backdrop-blur-sm dark:border-[#3c3c43] border-[#a2a1a1] dark:bg-opacity-55 bg-opacity-55"
        : "dark:bg-opacity-0 bg-opacity-0"
    }`}
    >
      <div className="wrapper relative flex w-full max-w-screen-2xl items-center justify-between">
        <div className="relative flex px-4 py-3 flex-row items-center justify-between w-full">
          <div className="logo-place flex flex-row gap-2 items-center">
            <Link href={"/"} className="w-fit h-fit">
              <Image
                src={logoImg}
                alt="logo"
                width={25}
                height={25}
                className=""
              />
            </Link>
            <Link href={"/"}>
              <div className="text-company font-bold text-neutral-800 dark:text-neutral-200 text-xl">
                Landify
              </div>
            </Link>
          </div>
          <button
            onClick={() => setIsHamburgerOpened(!isHamburgerOpened)}
            className="relative h-fit w-fit flex sm:hidden hamburger flex-col gap-[6px] items-end"
          >
            <div
              style={{
                transform: isHamburgerOpened
                  ? "rotate(45deg) translateY(5px)"
                  : "rotate(0deg) translateY(0px)",
              }}
              className="line relative w-6 h-[3px] bg-neutral-800 dark:bg-neutral-200 duration-200"
            ></div>
            <div
              style={{
                transform: isHamburgerOpened
                  ? "rotate(-45deg) translateY(-5px)"
                  : "rotate(0deg) translateY(0px)",
                width: isHamburgerOpened ? "24px" : "16px",
              }}
              className="line relative w-4 text-end h-[3px] bg-neutral-800 dark:bg-neutral-200 duration-200"
            ></div>
          </button>
          <div className="link-wrapper sm:relative absolute w-full h-fit inset-0 p-4 sm:p-0 top-12 sm:top-0 sm:w-fit ">
            <div
              className={`link-tabs relative inset-0 w-full p-[2px] h-fit items-center`}
            >
              {
                isHamburgerOpened && 
                <div className="absolute z-0 glow-gradient flex sm:hidden bg-transparent bg-gradient-to-br from-purple-600 to-pink-500 w-full h-full inset-0 rounded-lg m-auto blur-md"></div>

              }
              <div
                className={`relative z-10 bg-[#f4f4f5] dark:bg-[#18181b] sm:dark:bg-transparent sm:bg-transparent w-full h-full content-wrapper flex sm:flex-row flex-col gap-4 rounded-lg  p-4 sm:p-0 sm:items-center items-start sm:border-none border-2 border-purple-600 sm:flex ${
                  isHamburgerOpened ? "flex" : "hidden"
                } `}
              >
                <ul className="relative z-10  flex w-fit h-fit gap-4 sm:flex-row flex-col">
                  {tabs.map((tab, index) => (
                    <li key={index}>
                      {tab.link.startsWith("#") ? (
                        <Link
                          href={tab.link}
                          onClick={(e) => {
                            e.preventDefault();
                            const pricingSection = document.getElementById(
                              tab.link.slice(1)
                            );
                            if (pricingSection) {
                              pricingSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                          className="dark:text-neutral-300 dark:hover:text-neutral-200 duration-200 text-neutral-700 hover:text-neutral-950"
                        >
                          {tab.text}
                        </Link>
                      ) : (
                        <Link
                          href={tab.link}
                          className="dark:text-neutral-300 dark:hover:text-neutral-200 duration-200 text-neutral-700 hover:text-neutral-950"
                        >
                          {tab.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="buttons flex flex-col w-fit h-fit gap-4 sm:flex-row items-start sm:items-center">
                  <button onClick={toggleTheme} className="w-fit h-fit">
                    {websiteTheme === "dark" ? (
                      <MdOutlineDarkMode className="text-xl" />
                    ) : (
                      <MdOutlineLightMode className="text-xl" />
                    )}
                  </button>
                  <button className="px-3 py-[4px] bg-transparent bg-gradient-to-tr from-[#7f40ef] to-[#a47aed] rounded-md text-bl font-semibold hover:from-[#7a47d4] hover:to-[#9767ea] transition-colors duration-300 transform text-white">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
