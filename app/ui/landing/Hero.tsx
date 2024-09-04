import { FaMagic } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Hero(): JSX.Element {
  return (
    <section className="relative z-20 hero w-full h-fit">
      <div className="content-all-center-wrapper w-full h-fit flex flex-col items-center justify-center gap-5">
        <div className="updates-click w-fit h-fit group cursor-pointer flex flex-row gap-1 items-center border-2 rounded-2xl px-2 py-1 border-neutral-600 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-200">
          <FaMagic className="text-sm text-neutral-400 group-hover:text-purple-300 duration-300" />
          <span className="text-sm text-neutral-400 group-hover:text-neutral-300 duration-300">
            New updates!
          </span>
        </div>
        <div className="head-description-and-buttons-wrapper flex flex-col w-fit h-fit items-center justify-center gap-12">
          <div className="head-and-description w-fit h-fit flex items-center justify-center flex-col gap-4">
            <h1 className="w-fit h-fit font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-500">
              Welcone to Landify
            </h1>
            <p className="w-fit h-fit max-w-[512px] text-center text-neutral-400 text-lg">
              A killer template for your next SaaS product. Its all free, no
              fees, download it and your are ready to go.
            </p>
          </div>
          <div className="buttons w-fit h-fit flex flex-row flex-wrap gap-6 items-center justify-center">
            <button className="px-4 py-2 bg-transparent bg-gradient-to-tr from-[#7e3eee] to-[#a384f9] hover:shadow-lg hover:shadow-neutral-700 duration-300 rounded-lg w-fit h-fit border border-[#7e3eee]">
              Get started
            </button>
            <button className="px-4 py-2 flex flex-row gap-2 items-center justify-center bg-black border border-purple-600 rounded-lg hover:border-purple-400 duration-300 group">
              <span>Overview</span>
              <FaLongArrowAltRight className="group-hover:translate-x-1 duration-300 group-hover:text-purple-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
