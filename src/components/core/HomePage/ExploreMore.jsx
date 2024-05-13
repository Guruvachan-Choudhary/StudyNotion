import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HeighlightText from "./HighlightText";
import CourseCard from "../HomePage/CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTabe, setCurrentTabe] = useState([0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentcard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTabe(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentcard(result[0].courses[0].heading);
  };

  return (
    <div className="">
      <div className="text-4xl font-semibold flex items-center justify-center">
        Unlock the <HeighlightText text={"power of code"} />
      </div>
      <p className="text-richblack-300  text-center mt-3 font-inter text-[16px]">
        Learn to Build Anything You Can Imagine
      </p>
      <div className="flex flex-row  rounded-full bg-richblack-800 mb-5 border-2 border-richblack-600 mt-5 px-1 py-1">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center gap-2 ${
                currentTabe === element
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : " text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer hover:text-richblack-5 px-7 py-2`}
              key={index}
              onClick={() => {
                setMyCards(element);
              }}
            >
              {element}
            </div>
          );
        })}
      </div>
      <div className="lg:h-[150px]"></div>
      {/* course card ka group */}
      <div className="absolute right-6 -bottom-48 flex flex-row  justify-between items-center w-full mt-32">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentcard={setCurrentcard}
             />
          );
        })}
      </div>
    </div>
  );
};
export default ExploreMore;
