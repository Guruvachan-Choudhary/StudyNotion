import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import comparewithothers from "../../../assets/Images/Compare_with_others.png";
import planeyourlessons from "../../../assets/Images/Plan_your_lessons.svg";
import CTAButton from "../HomePage/Button";

const LearninglanguageSection = () => {
  return (
    <div className="mt-[150px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl text-center font-semibold mt-4">
          Yours Swiss Knife for{" "}
          <HighlightText text={"Leaerning any Language"} />
        </div>
        <div className="text-center text-richblack-500 mx-auto font-inter text-[16px] w-[70%]">
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-row items-center justify-center mt-5">
          <img
            src={Know_your_progress}
            alt="img"
            className="object-contain -mr-32"
          />
          <img src={comparewithothers} alt="img" className="object-contain" />
          <img
            src={planeyourlessons}
            alt="img"
            className="object-contain -ml-36"
          />
        </div>
        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
export default LearninglanguageSection;
