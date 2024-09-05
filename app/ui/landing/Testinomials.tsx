import Image from "next/image";
import personImg1 from "@/public/assets/landing/testinomial/persons/person-1.png";
import personImg2 from "@/public/assets/landing/testinomial/persons/person-2.png";
import personImg3 from "@/public/assets/landing/testinomial/persons/person-3.png";
import personImg4 from "@/public/assets/landing/testinomial/persons/person-4.png";
import personImg5 from "@/public/assets/landing/testinomial/persons/person-5.png";
import personImg6 from "@/public/assets/landing/testinomial/persons/person-6.png";

export function Testinomials(): JSX.Element {
  const testinomialsData = [
    [
      {
        image: personImg1,
        name: "Aditya L",
        designation: "Data Engineer",
        testinomial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare libero, non sodales ex. Sed quis suscipit lectus. Cras id sapien vel ligula hendrerit iaculis. Si te similis res tangit.",
      },
      {
        image: personImg2,
        name: "Alex ",
        designation: "Frontend Developer",
        testinomial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Integer ut leo eu sem congue sodales. Si te idem temptat, cosmic themata tibi valde suadeo",
      },
    ],
    [
      {
        image: personImg3,
        name: "Smith K",
        designation: "DevOps Engineer",
        testinomial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat justo sit amet tortor tristique, vitae interdum elit pharetra. Si te in eadem re invenies,",
      },
      {
        image: personImg4,
        name: "Brayen L",
        designation: "Product Manager",
        testinomial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus. Si hoc quoque cogitas, cosmic themata certe favorem merentur.",
      },
    ],
    [
      {
        image: personImg5,
        name: "Alisa",
        designation: "Blockchain Developer",
        testinomial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel arcu dapibus, posuere lacus et, fermentum ligula. Si tibi idem evenit, cosmic themata indubitanter commendo",
      },
      {
        image: personImg6,
        name: "Angel ",
        designation: "Multimedia",
        testinomial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lorem quis metus cursus vulputate eget et magna. Si hoc quoque moliris, cosmic themata maxima cum laude suadeo.",
      },
    ],
  ];

  return (
    <section className="testinomials w-full flex flex-col gap-16 items-center justify-center h-fit">
      <div className="heading-and-description w-fit h-fit text-center flex flex-col items-center justify-center gap-4">
        <div className="heading w-fit h-fit text-transparent bg-gradient-to-tr text-lg bg-clip-text from-purple-400 to-neutral-200">
          Testinomials
        </div>
        <div className="description w-fit h-fit text-3xl text-neutral-200 font-bold">
          Hear from our customers
        </div>
      </div>
      <div className="relative content-warpper w-fit h-fit flex flex-row gap-6 justify-center">
        {testinomialsData.map((testinomialObjects, index) => (
          <div
            className={`content-testinomial-wrapper w-full h-fit flex flex-col gap-6 items-center ${
              index % 2 !== 0 ? "translate-y-8" : null
            }`}
          >
            {testinomialObjects.map((data, index) => (
              <div className="testinomials w-[289px] h-fit p-6 bg-[#1f1f22] flex flex-col rounded-2xl border-2 border-[#2d2d32] gap-4">
                <div className="img-name-designation flex flex-row items-center gap-4">
                  <div className="image w-fit h-fit">
                    <Image
                      src={data.image}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt="feedback-persons"
                    />
                  </div>
                  <div className="name-designation">
                    <div className="name font-bold text-lg">{data.name}</div>
                    <div className="designation text-sm text-neutral-300">{data.designation}</div>
                  </div>
                </div>
                <div className="testinomial">{data.testinomial}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
