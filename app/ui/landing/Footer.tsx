import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo/logo.png";

export function Footer(): JSX.Element {
  // Define all the link
  const links = [
    [   
      Navigation: [
        {
          site: "Blog",
          link: "/blog",
        },
        {
          site: "Overview",
          link: "/",
        },
        {
          site: "About",
          link: "/",
        },
        {
          site: "Contact",
          link: "/",
        },
      ],
    },
    {
      Legal: [
        {
          site: "License",
          link: "/license",
        },
        {
          site: "Refund Policy",
          link: "/refund-policy",
        },
        {
          site: "Terms of use",
          link: "/terms",
        },
        {
          site: "Privacy policy",
          link: "/privacy-policy",
        },
        {
          site: "Support",
          link: "/support",
        },
      ],
    },
    {
      Know: [
        {
          site: "@ScientistManas",
          link: "https://x.com/ScientistManas",
        },
        {
          site: "@CertiMailer",
          link: "https://x.com/CertiMailer",
        },
      ],
    },
  ];

  return (
    <footer className="w-full h-fit border-t border-[#3b3b41] flex items-center justify-center">
      <div className="footer-wrapper w-full max-w-screen-2xl flex flex-col gap-8 items-center justify-center px-4 pb-8 pt-12">
        <div className="contents-footer w-full items-center justify-between h-fit flex flex-row flex-wrap ">
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
              <div className="text-company-name text-2xl font-semibold text-neutral-200">
                Landify
              </div>
            </div>
            <form
              // onSubmit={}
              className="flex w-fit h-fit flex-col gap-3"
            >
              <div className="text-for-signup w-fit text-neutral-100 h-fit">
                Sign up for our newsletter
              </div>
              <div className="form-input-and-submit flex flex-row gap-2 flex-wrap w-fit h-fit items-center">
                <label htmlFor="">
                  <input
                    required
                    placeholder="Email"
                    className="bg-[#27272a] text-neutral-300 border border-[#414147] rounded-md px-4 py-2 w-[244px] h-fit outline-none focus:outline-1 focus:outline-purple-400 duration-300 focus:border-transparent"
                    type="email"
                    name="email"
                    id="email"
                  />
                </label>
                <label htmlFor="">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-transparent bg-gradient-to-tr from-[#7e3eee] to-purple-800 rounded-md font-semibold duration-300 hover:from-[#6e33d4] hover:to-purple-900"
                  >
                    Subscribe
                  </button>
                </label>
              </div>
            </form>
          </div>
          <div className="links flex flex-row flex-wrap gap-6 items-center w-fit">
            {
                links.map((linkData, index) => (
                    <div className="links-wrapper">
                        <div className="heading"></div>
                        <ul>
                            {linkData.}
                        </ul>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="line w-full h-[1px] bg-[#3b3b41]"></div>
        <div className="copyright w-full h-fit flex items-start">
          <div className="text text-neutral-400 text-sm">
            &copy; 2024 Landify. All rights reversed.
          </div>
        </div>
      </div>
    </footer>
  );
}
