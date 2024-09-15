"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiFarcaster } from "react-icons/si";
import { useState } from "react";

export function Footer(): JSX.Element {
  // Define all the link
  const links = [
    {
      category: "Navigation",
      items: [
        { site: "Blog", link: "/blog" },
        { site: "Overview", link: "/" },
        { site: "About", link: "/" },
        { site: "Contact", link: "/" },
      ],
    },
    {
      category: "Legal",
      items: [
        { site: "License", link: "/license" },
        { site: "Refund Policy", link: "/refund-policy" },
        { site: "Terms of use", link: "/terms" },
        { site: "Privacy policy", link: "/privacy-policy" },
        { site: "Support", link: "/support" },
      ],
    },
    {
      category: "Know",
      items: [
        { site: "@ScientistManas", link: "https://x.com/ScientistManas" },
        { site: "@CertiMailer", link: "https://x.com/CertiMailer" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "/",
    },
    {
      name: "Twitter (X)",
      icon: FaXTwitter,
      link: "/",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      link: "/",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      link: "/",
    },
    {
      name: "Mail",
      icon: CiMail,
      link: "/",
    },
    {
      name: "Github",
      icon: FiGithub,
      link: "https://github.com/",
    },
    {
      name: "Farcaster",
      icon: SiFarcaster,
      link: "https://warpcast.com/",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent relaoding
    e.preventDefault();
  };

  return (
    <footer className="w-full h-fit border-t dark:border-[#3b3b41] border-[#d4d4d8] flex items-center justify-center">
      <div className="footer-wrapper w-full max-w-screen-2xl flex flex-col gap-8 items-center justify-center px-4 pb-8 pt-12">
        <div className="contents-footer w-full items-center justify-between h-fit flex flex-row flex-wrap gap-10 ">
          <div className="logo-and-form flex flex-col gap-6">
            <div className="logo-content flex flex-row gap-2 items-center">
              <div className="logo w-fit h-fit">
                <Image
                  src={logo}
                  alt="logo"
                  width={20}
                  height={20}
                  className="w-fit h-fit"
                />
              </div>
              <div className="text-company-name text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
                Landify
              </div>
            </div>
            <form
              // onSubmit={}
              className="flex w-fit h-fit flex-col gap-3"
            >
              <div className="text-for-signup w-fit dark:text-neutral-100 text-neutral-700 h-fit">
                Sign up for our newsletter
              </div>
              <div className="form-input-and-submit flex flex-row gap-2 flex-wrap w-fit h-fit items-center">
                <label htmlFor="">
                  <input
                    autoComplete="off"
                    required
                    placeholder="Email"
                    className="dark:bg-[#27272a] bg-neutral-300 dark:text-neutral-300 text-neutral-800 border dark:border-[#414147] rounded-md px-4 py-2 w-[244px] h-fit outline-none focus:outline-1 focus:outline-purple-400 duration-300 focus:border-transparent dark:placeholder:text-neutral-400 placeholder:text-neutral-600"
                    type="email"
                    name="email"
                    id="email"
                  />
                </label>
                <label htmlFor="">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-transparent bg-gradient-to-tr from-[#7e3eee] to-purple-800 rounded-md font-semibold duration-300 hover:from-[#6e33d4] hover:to-purple-900 text-neutral-200 dark:text-neutral-200"
                  >
                    Subscribe
                  </button>
                </label>
              </div>
            </form>
          </div>
          <div className="links flex flex-row flex-wrap gap-8 items-start h-fit w-fit">
            {links.map((linksData, index) => (
              <div key={index} className="links-wrapper flex flex-col gap-2">
                <div className="heading font-bold">{linksData.category}</div>
                <ul className="flex flex-col items-start justify-center gap-1">
                  {linksData.items.map((linkData, index) => (
                    <li
                      key={index}
                      className="h-fit w-fit dark:text-neutral-400 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-900 duration-300"
                    >
                      <Link className="w-fit h-fit" href={linkData.link}>
                        {linkData.site}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="line w-full h-[1px] dark:bg-[#3b3b41] bg-[#d4d4d8]"></div>
        <div className="copyright w-full h-fit flex flex-row flex-wrap gap-6 items-center justify-between ">
          <div className="text dark:text-neutral-400 text-sm w-fit h-fit text-neutral-700">
            &copy; 2024 Landify. All rights reversed.
          </div>
          <div className="social-links w-fit h-fit flex flex-row gap-1">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="p-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-neutral-200 duration-300"
              >
                <link.icon className="text-lg dark:text-neutral-400 text-neutral-600" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
