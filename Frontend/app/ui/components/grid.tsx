export function Grid(): JSX.Element {
  return (
    <div className="grids -z-10 absolute bg-transparent flex items-center justify-center w-full h-full overflow-clip">
      <div className="flex flex-row flex-wrap items-center justify-center w-full h-full">
        {Array.from({ length: 296 }).map((_, index) => (
          <div
            key={index}
            className="w-[20%] sm:w-[10%] md:w-[8.5%] lg:w-[7%] h-[10%] xl:h-[15%] border dark:border-[#212125] border-neutral-100"
          ></div>
        ))}
      </div>
    </div>
  );
}
