// Importing necessary hooks and components from React and React Icons
"use client";

import { useState } from "react";
import { TiTick } from "react-icons/ti";

// Pricing component definition
export function Pricing(): JSX.Element {
  // State to manage the pricing switch between monthly and yearly
  const [pricedYearly, setPricedYearly] = useState<boolean>(false);

  // Pricing options data
  const pricingOptions = [
    {
      plan: "Free",
      targetAudience: "For developers",
      pricePerMonth: "$0",
      pricePerYearOneMonth: "$0",
      billedDuration: "paid monthly",
      isPopular: false,
      features: [
        "Integrations",
        "Connect to your database",
        "Data storage (Up to 5 GB)",
        "Email support",
        "9 request/min",
        "Basic reports",
      ],
    },
    {
      plan: "Professional",
      targetAudience: "For growing business",
      pricePerMonth: "$40",
      pricePerYearOneMonth: "$35",
      billedDuration: "paid monthly",
      isPopular: true,
      features: [
        "Integrations",
        "Connect to your database",
        "Data storage (Up to 50 GB)",
        "Email support",
        "100K request/min",
        "Priority support",
        "Professional reports",
        "Advanced analytics",
        "Team Members (20 users)",
        "AI integration",
      ],
    },
    {
      plan: "Enterprise",
      targetAudience: "For next level companies",
      pricePerMonth: "$120",
      pricePerYearOneMonth: "$100",
      billedDuration: "paid monthly",
      isPopular: false,
      features: [
        "Integrations",
        "Connect to your database",
        "Data storage (unlimited)",
        "Import and export data",
        "Email support",
        "500K request/min",
        "Priority support",
        "Professional reports",
        "Custom reports",
        "Advanced analytics",
        "Team Members (100 users)",
        "AI integration",
        "White-glove onboarding",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full h-fit flex flex-col flex-wrap gap-12 items-center justify-center"
    >
      {/* Header and description with pricing switch */}
      <div className="head-description-button flex flex-col items-center justify-center w-fit h-fit gap-4">
        {/* Heading */}
        <div className="heading w-fit h-fit text-lg text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-400 from-purple-800 dark:to-neutral-100 to-neutral-700">
          Pricing
        </div>
        {/* Description and switch for monthly/yearly pricing */}
        <div className="description-and-switch w-fit h-fit flex flex-col gap-2 items-center justify-center">
          <div className="description dark:text-neutral-200 text-neutral-700 text-2xl font-semibold">
            A plan for every business
          </div>
          <div
            className="switch cursor-pointer flex flex-row gap-2 w-fit h-fit items-center justify-center"
            onClick={() => setPricedYearly(!pricedYearly)}
          >
            <div className="text">Monthly</div>
            <div
              className={`relative button-out-and-in w-12 h-fit border ${
                pricedYearly
                  ? "border-purple-800"
                  : "dark:border-[#414147] border-[#c4c4c8]"
              } dark:bg-[#27272a] bg-neutral-300 rounded-2xl p-[2px] items-center flex duration-300 justify-start`}
            >
              <div
                className={`relative ball w-5 h-5 dark:bg-neutral-300 bg-neutral-800 rounded-full duration-300 ${
                  pricedYearly ? "translate-x-[20px]" : "translate-x-0"
                }`}
              ></div>
            </div>
            <div className="text">Yearly</div>
          </div>
        </div>
      </div>
      {/* Pricing options display */}
      <div className="pricing-content-wrapper w-fit h-fit flex flex-row gap-4 flex-wrap justify-center">
        {pricingOptions.map((pricingData, index) => (
          <div
            key={index}
            className={`relative pricing-sub-wrapper w-fit flex items-center justify-center rounded-xl`}
          >
            {/* Highlight the 'Professional' plan with a gradient border */}
            {pricingData.plan === "Professional" && (
              <div className="border-gradient absolute z-0 w-[101.2%] h-[100.8%] bg-transparent bg-gradient-to-br from-purple-800 to-[#3b3b42] rounded-xl"></div>
            )}
            <div
              className={`plan-all-details-wrapper relative z-10 px-6 py-4 w-fit h-full flex ${
                pricingData.plan === "Professional"
                  ? "dark:bg-[#27272a] bg-neutral-200"
                  : null
              } rounded-xl flex-col justify-between gap-8`}
            >
              {/* Plan details */}
              <div className="details w-[243px] flex flex-col gap-5">
                <div className="details-sub-wrapper flex flex-col gap-6 h-fit">
                  <div
                    className={`plan-pricing-wrapper relative w-full h-fit flex flex-col items-start gap-2`}
                  >
                    <div className="plan-popular-wrapper w-full h-fit flex flex-row justify-between items-center">
                      <div className="name text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-400 dark:to-neutral-200 from-neutral-800 to-neutral-900 font-semibold w-fit h-fit">
                        {pricingData.plan}
                      </div>
                      {/* Highlight 'Professional' plan as popular */}
                      {pricingData.plan === "Professional" && (
                        <div className="popular bg-purple-800 text-sm text-neutral-300 px-3 py-1 rounded-3xl w-fit h-fit">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="plan-for-whom dark:text-neutral-300 text-neutral-800">
                      {pricingData.targetAudience}
                    </div>
                    <div className="billed-amount flex flex-col">
                      <div className="amount w-fit h-fit flex flex-row gap-1 items-end">
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr dark:from-purple-400 from-purple-800 dark:to-neutral-200 to-purple-600 font-bold text-5xl">
                          {pricedYearly
                            ? pricingData.pricePerYearOneMonth
                            : pricingData.pricePerMonth}
                        </span>
                        <span className="font-semibold text-3xl text-neutral-800 dark:text-neutral-200">
                          /mon
                        </span>
                      </div>
                      <div className="billedDuration dark:text-neutral-400 text-neutral-700">
                        ({pricingData.billedDuration})
                      </div>
                    </div>
                  </div>
                </div>
                {/* Features list */}
                <div className="features-provided-wrapper w-fit h-fit flex flex-col gap-1">
                  {pricingData.features.map((feature, index) => (
                    <div
                      className="feature-wrapper flex flex-row gap-1 items-center"
                      key={index}
                    >
                      <div className="w-fit h-fit">
                        <TiTick className="text-green-500" />
                      </div>
                      <div className="w-fit h-fit dark:text-neutral-300 text-neutral-900">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* 'Get started' button */}
              <div
                className={`button w-full h-fit text-center border-2 py-2 rounded-lg font-semibold ${
                  pricingData.plan === "Professional"
                    ? "border-purple-800 bg-purple-800 text-neutral-200"
                    : "border-purple-700 dark:bg-neutral-800 bg-neutral-300 dark:text-neutral-200 text-neutral-900"
                }`}
              >
                <button className="w-full h-fit text-center">
                  Get started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
