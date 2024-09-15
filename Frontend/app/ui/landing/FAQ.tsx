// Importing React hooks and icons
"use client"; // Ensure this component is a client-side component

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// Interface defining the structure of each FAQ item
interface FAQItem {
  question: string; // The question text
  answer: string; // The answer text
}

// Component that displays frequently asked questions (FAQ) with expandable answers
export function FAQ(): JSX.Element {
  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Array containing FAQ data
  const faqData: FAQItem[] = [
    {
      question: "Who are the audience?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum orci a augue sodales dapibus. Curabitur sollicitudin, enim id dapibus hendrerit, magna nunc egestas ante, sit amet ultricies velit dui nec odio. Proin varius erat ut turpis pharetra, quis volutpat elit facilisis. Aliquam ac eros eget sem elementum lacinia. Fusce dignissim malesuada ipsum ac ornare. Suspendisse potenti. Maecenas et ex orci. Sed tincidunt justo vitae metus feugiat vestibulum.",
    },
    {
      question: "What is can used for?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum nunc nec dolor lacinia, eget interdum eros bibendum. Fusce vitae nisl ac neque fermentum pharetra. Phasellus id erat sit amet odio fringilla pharetra. Morbi nec nisi in lacus rhoncus auctor vel in risus. Nulla dapibus, arcu in bibendum varius, metus libero ullamcorper elit, et fermentum leo eros at lorem. Maecenas dictum, erat in efficitur faucibus, eros purus tincidunt urna, ut fringilla orci metus sit amet felis.",
    },
    {
      question: "Why choose our organization?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, metus a malesuada ultricies, risus tortor elementum enim, id auctor eros eros nec leo. Suspendisse viverra, mauris sed ornare rutrum, metus felis gravida eros, vitae cursus lectus lectus ut justo. Duis elementum dapibus neque. Ut bibendum vehicula nisi, non aliquet purus viverra in. Integer aliquet, tortor sit amet volutpat vehicula, nunc libero lacinia turpis, ut tempus metus purus a ante.",
    },
    {
      question: "What is our current state?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ligula et mauris ullamcorper vestibulum. Praesent ut felis massa. Aliquam feugiat, mauris id sollicitudin varius, elit urna posuere leo, eget pretium neque lectus et orci. Cras feugiat eros ex, eget bibendum velit porttitor at. Vivamus egestas velit eget nisi varius, nec fermentum lorem gravida. Nullam ornare dui a eros gravida, sit amet porttitor urna hendrerit. Fusce vulputate tortor ac orci ullamcorper aliquam.",
    },
    {
      question: "What are the products we offer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac ex et lacus tristique posuere. Donec sit amet interdum tortor, quis consequat dolor. Ut accumsan facilisis sapien, vitae tincidunt lacus dapibus eu. Maecenas tempor turpis non ante iaculis, vitae gravida ipsum laoreet. Duis nec purus quis lorem blandit fermentum. Sed interdum mauris sit amet velit malesuada lobortis. Integer dictum tortor ac mauris cursus, nec maximus nulla gravida. Phasellus vitae justo non libero cursus convallis.",
    },
  ];

  return (
    <section className="faq w-full flex h-fit items-center justify-center flex-col gap-10">
      <div className="heading-wrapper w-fit h-fit flex flex-col items-center justify-center gap-6 p-4">
        <div className="heading text-transparent bg-clip-text bg-gradient-to-br dark:from-purple-400 dark:to-neutral-100 from-purple-800 to-neutral-800 text-lg w-fit h-fit text-center">
          FAQ
        </div>
        <div className="description text-3xl dark:text-neutral-300 text-center text-neutral-700 font-bold">
          Answer to all your questions
        </div>
      </div>
      <div className="faq-wrapper w-fit h-fit flex flex-col gap-4 p-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="individual-wrapper h-fit max-w-[766px] w-fit text-wrap flex flex-col border dark:border-[#3b3b41] border-[#d4d4d8] rounded-lg group dark:hover:border-purple-900 hover:border-[#d9d9f3] duration-300 items-center"
          >
            <div
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
              className="question-and-button py-4 px-6 flex flex-row items-center w-full h-full transition duration-300 cursor-pointer justify-between group"
            >
              <div className="question font-semibold dark:text-neutral-200 text-neutral-600 dark:group-hover:text-purple-300 group-hover:text-purple-800 duration-300 text-base md:text-lg">
                {faq.question}
              </div>
              <div className="button-arrow group">
                <IoIosArrowDown
                  className={`text-base md:text-xl dark:group-hover:text-purple-300 group-hover:text-purple-800 duration-500 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`answer px-6 overflow-hidden transition-[max-height] duration-700 ease-in-out`}
              style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
            >
              <p className="dark:text-neutral-300 text-neutral-800 py-4 md:text-base text-sm">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
