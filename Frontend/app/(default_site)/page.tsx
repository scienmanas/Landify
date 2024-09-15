// Import necessary components for the Home page
import { Hero } from "@/app/ui/landing/Hero";
import { Companies } from "@/app/ui/landing/Companies";
import { FeaturesOnlyText } from "@/app/ui/landing/features";
import { FeaturesWithImages } from "@/app/ui/landing/features-cum-images";
import { SpotlightImage } from "@/app/ui/landing/spotlight-image";
import { Trust } from "@/app/ui/landing/Trust";
import { Testinomials } from "@/app/ui/landing/Testinomials";
import { HeroVideo } from "@/app/ui/landing/hero-video";
import { Pricing } from "@/app/ui/landing/Pricing";
import { FAQ } from "@/app/ui/landing/FAQ";
import { EndHighlight } from "@/app/ui/landing/end-card";
import { Grid } from "@/app/ui/components/grid";

// Main Home page component
export default function Home(): JSX.Element {
  return (
    <div className="w-full h-fit flex flex-col gap-20 items-center justify-center">
      {/* Upper section including the hero and companies sections */}
      <div className="relative upper-part-nav-and-hero flex w-full h-fit flex-col items-center justify-center">
        {/* Gradient overlay for visual effect */}
        <div className="gradient-container top-0 z-0 absolute flex items-center w-full justify-center">
          <div className="gradint-bg relative inset-0 bg-transparent bg-gradient-to-b from-purple-500 to-white dark:to-black blur-2xl w-[45%] h-52 dark:opacity-65 opacity-30 rounded-b-[90%]"></div>
        </div>
        {/* Grid layout component */}
        <Grid />
        <div className="relative z-10 top-under-warpper w-full h-fit flex flex-col gap-24 items-center justify-center mt-20 md:mt-24 lg:mt-28">
          <div className="content-wrapper w-full max-w-screen-2xl flex flex-col gap-28">
            {/* Hero section */}
            <div className="relative hero w-full h-fit z-10">
              <Hero />
            </div>
          </div>
          {/* Companies section */}
          <div className="companies w-full h-fit dark:bg-[#161619] bg-white flex inset-0">
            <Companies />
          </div>
        </div>
      </div>

      {/* Main content sections */}
      <div className="content-wrappper w-full max-w-screen-xl flex flex-col items-center justify-center gap-16 sm:gap-20 md:gap-28 lg:gap-36">
        {/* Highlighted video section */}
        <div className="companies w-full h-fit flex items-center justify-center">
          <div className="w-fit h-fit highlighted-video flex items-center justify-center">
            <HeroVideo />
          </div>
        </div>
        {/* Features only text section */}
        <div className="features-only-text w-full h-fit flex items-center justify-center">
          <FeaturesOnlyText />
        </div>
        {/* Features with images section */}
        <div className="features-with-images w-full h-fit flex items-center justify-center">
          <FeaturesWithImages />
        </div>
      </div>

      {/* Spotlight image section */}
      <div className="spotlight-image w-full h-fit flex items-center justify-center">
        <SpotlightImage />
      </div>

      {/* Additional content sections */}
      <div className="content-wrapper w-full max-w-screen-2xl flex items-center justify-center flex-col gap-36">
        {/* Trust section */}
        <div className="trust-tab w-full h-fit">
          <Trust />
        </div>
        {/* Testimonials section */}
        <div className="testinomials w-full h-fit">
          <Testinomials />
        </div>
        {/* Pricing section */}
        <div className="pricing-tab w-full h-fit">
          <Pricing />
        </div>
        {/* FAQ section */}
        <div className="FAQ w-full h-fit">
          <FAQ />
        </div>
        {/* End highlight section */}
        <div className="end-highlight w-full h-fit">
          <EndHighlight />
        </div>
      </div>
    </div>
  );
}
