// --- Image Imports ---
// Importing images used for displaying testimonials
import Image, { StaticImageData } from "next/image";
import personImg1 from "@/public/assets/landing/testinomial/persons/person-1.png";
import personImg2 from "@/public/assets/landing/testinomial/persons/person-2.png";
import personImg3 from "@/public/assets/landing/testinomial/persons/person-3.png";
import personImg4 from "@/public/assets/landing/testinomial/persons/person-4.png";
import personImg5 from "@/public/assets/landing/testinomial/persons/person-5.png";
import personImg6 from "@/public/assets/landing/testinomial/persons/person-6.png";

// --- Type Definitions ---
// Define the structure of testimonial data
interface TestimonialData {
  image: StaticImageData; // Image associated with the testimonial
  name: string; // Name of the person giving the testimonial
  designation: string; // Designation of the person
  testimonial: string; // The testimonial text
}

// --- Testinomials Component ---
// This component displays a section of testimonials from customers.
export function Testinomials(): JSX.Element {
  // --- Testimonial Data ---
  // Array of arrays containing testimonial data objects
  const testimonialsData: TestimonialData[][] = [
    [
      {
        image: personImg1,
        name: "Aditya L",
        designation: "Data Engineer",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ornare libero, non sodales ex. Sed quis suscipit lectus. Cras id sapien vel ligula hendrerit iaculis. Si te similis res tangit.",
      },
      {
        image: personImg2,
        name: "Alex",
        designation: "Frontend Developer",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Integer ut leo eu sem congue sodales. Si te idem temptat, cosmic themata tibi valde suadeo",
      },
    ],
    [
      {
        image: personImg3,
        name: "Smith K",
        designation: "DevOps Engineer",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat justo sit amet tortor tristique, vitae interdum elit pharetra. Si te in eadem re invenies,",
      },
      {
        image: personImg4,
        name: "Brayen L",
        designation: "Product Manager",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus. Si hoc quoque cogitas, cosmic themata certe favorem merentur.",
      },
    ],
    [
      {
        image: personImg5,
        name: "Alisa",
        designation: "Blockchain Developer",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel arcu dapibus, posuere lacus et, fermentum ligula. Si tibi idem evenit, cosmic themata indubitanter commendo",
      },
      {
        image: personImg6,
        name: "Angel",
        designation: "Multimedia",
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lorem quis metus cursus vulputate eget et magna. Si hoc quoque moliris, cosmic themata maxima cum laude suadeo.",
      },
    ],
  ];

  // --- JSX Structure ---
  return (
    <section className="testinomials w-full flex flex-col gap-16 items-center justify-center h-fit">
      {/* Heading and Description Section */}
      <div className="heading-and-description w-fit h-fit text-center flex flex-col items-center justify-center gap-4">
        <div className="heading w-fit h-fit text-transparent bg-gradient-to-tr text-base md:text-lg bg-clip-text dark:from-purple-400 from-purple-800 dark:to-neutral-200 to-neutral-700 font-semibold">
          Testinomials
        </div>
        <div className="description w-fit h-fit md:text-3xl text-2xl dark:text-neutral-200 text-neutral-700 font-bold">
          Hear from our customers
        </div>
      </div>
      {/* Testimonials Content Wrapper */}
      <div className="relative content-warpper w-fit h-fit flex flex-col md:flex-row gap-4 md:gap-6 justify-center p-4">
        {/* Map through testimonials data to display each testimonial */}
        {testimonialsData.map((testimonialGroup, index1) => (
          <div
            key={index1}
            className={`content-testinomial-wrapper w-full h-fit flex flex-col md:gap-6 gap-4 items-center ${
              index1 % 2 !== 0 ? "md:translate-y-8" : ""
            }`}
          >
            {testimonialGroup.map((data, index2) => (
              <div
                key={index2}
                className="testinomials w-fit text-wrap md:max-w-[289px] min-w-[204px] h-fit p-6 dark:bg-[#1f1f22] bg-[#ebebee] flex flex-col rounded-2xl border-2 dark:border-[#2d2d32] border-[#d4d4d8] gap-4"
              >
                {/* Image, Name, and Designation */}
                <div className="img-name-designation flex flex-row items-center md:gap-4 gap-2">
                  <div className="image w-fit h-fit">
                    <Image
                      src={data.image}
                      width={50}
                      height={50}
                      className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                      alt="feedback-person"
                    />
                  </div>
                  <div className="name-designation">
                    <div className="name font-bold text-base md:text-lg text-neutral-800 dark:text-neutral-200">
                      {data.name}
                    </div>
                    <div className="designation text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
                      {data.designation}
                    </div>
                  </div>
                </div>
                {/* Testimonial Text */}
                <div className="testinomial text-neutral-800 dark:text-neutral-200 md:text-base text-sm">
                  {data.testimonial}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
