// Define the interface for the data used in the component
interface EndHighlightData {
  heading: string; // Heading text
  subheading: string; // Subheading text
  description: string; // Description text
}

// Component that displays a highlighted section with a heading, subheading, description, and a button
export function EndHighlight(): JSX.Element {
  // Data object holding the text content for the component
  const data: EndHighlightData = {
    heading: "Lorem ipsum era",
    subheading: "What are you waiting for?",
    description:
      "Facilisis ac turpis consequat, ornare luctus justo in. Proin consectetur, risus at auctor convallis.",
  };

  return (
    <section className="relative w-full h-fit flex items-center justify-center">
      <div className="content-wrapper-all w-fit h-fit p-4">
        <div className="relative content-wrapper w-fit h-fit flex flex-col gap-6 rounded-xl items-center justify-center">
          {/* Background gradient effect */}
          <div className="z-0 p-2 absolute border-effect w-[100.5%] h-[100.8%] bg-transparent bg-gradient-to-br dark:from-purple-800 dark:to-[#3b3b42] from-purple-300 to-[#d4d4d8] rounded-xl"></div>
          {/* Main content wrapper with gradient overlay */}
          <div className="relative z-10 conent-wrapper-content w-full h-fit dark:bg-[#27272a] bg-neutral-100 rounded-xl">
            <div className="z-20 p-2 absolute gradient-effect w-full h-full bg-transparent bg-gradient-to-br from-purple-800 dark:to-[#3b3b42] to-60% opacity-30 rounded-xl"></div>
            {/* Content section with heading, subheading, description, and button */}
            <div className="relative conents-all z-30 flex flex-row flex-wrap gap-6 items-end justify-between py-10 px-6 sm:px-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="relative z-30 w-fit h-fit all-content-wrapper flex flex-col gap-6 rounded-xl">
                {/* Heading */}
                <div className="heading text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-400 from-purple-700 dark:to-neutral-300 to-neutral-800 w-fit h-fit md:text-base text-sm">
                  {data.heading}
                </div>
                {/* Subheading and description */}
                <div className="subheading-and-description w-fit max-w-[480px] flex flex-col gap-6 md:text-base text-sm">
                  <div className="subheading md:text-3xl text-2xl font-bold dark:text-neutral-200 text-neutral-800">
                    {data.subheading}
                  </div>
                  <div className="description dark:text-neutral-300 text-gray-700">
                    {data.description}
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="button w-fit h-fit">
                <button className="bg-transparent bg-gradient-to-tr from-[#7d3dea] to-purple-600 px-4 py-2 rounded-md font-bold text-neutral-200 dark:text-neutral-200 md:text-base text-sm">
                  Get landify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
