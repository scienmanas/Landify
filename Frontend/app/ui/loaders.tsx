// Import type definitions for props from a definitions file
import { submissionLoaderProps } from "@/app/lib/definitions";

// Component for displaying a top-loading bar, usually used during page loading
export function TopLoader(): JSX.Element {
  return (
    <section className="top-load-bar absolute w-full z-50">
      {/* Container for the loading bar */}
      <div className="load-bar">
        {/* Individual bars in the loading bar */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </section>
  );
}

// Component for displaying a submission/loading spinner with customizable dimensions and color
export function SubmissionLoader({
  width,
  height,
  color,
}: submissionLoaderProps): JSX.Element {
  return (
    <div className="flex justify-center items-center w-fit h-fit">
      {/* Spinner element with dynamic styles */}
      <div
        style={{
          width: width, // Width of the spinner
          height: height, // Height of the spinner
          borderColor: color, // Color of the spinner border
        }}
        className="animate-spin rounded-full border-b-2"
      ></div>
    </div>
  );
}
