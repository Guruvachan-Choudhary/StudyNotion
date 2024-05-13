import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearninglanguageSection from "../components/core/HomePage/LearninglanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/footer";

const Home = () => {
  return (
    <div>
      {/* sectiuon 1 */}
      <div className="relative mx-auto max-w-maxContent flex flex-col w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-inter text-[16px] text-richblack-200 transition  duration-200 hover:scale-95">
            <div className="flex flex-row items-center gap-4 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 font-inter text-[16px]">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future With
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="w-[90%] text-center font-inter text-[16px] text-richblack-300 mt-4">
          With our online coding courses,you can learn at your own pace,from
          anywhere in the world ,and get access to a wealth of
          resources,including hands-on projects,quizzes, and personalized
          feedback from instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={`lg:flex-row sm:flex-col`}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your <HighlightText text={"coding potential"} /> with our
                online courses
              </div>
            }
            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`import React from'react';\nimport Home from'./components/Home';\nfunction App(){\nreturn(\n<div className="App">\n<BrowserRouter>\n</BrowserRouter>\n</div>\n);\n}\nexport default App;`}
            codeColor={"text-yellow-25"}
            backgroundGradiant={"gadiant1"}
          />
        </div>
        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={`lg:flex-row-reverse sm:flex-col-reverse`}
            heading={
              <div className="text-4xl font-semibold">
                Start  <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.1"}
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h>\n<nav><a href="one/">One</a>\n<ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-pink-200"}
            backgroundGradiant={"gadiant2"}
          />
        </div>
        <ExploreMore/>
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage-bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col justify-center items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className=" flex flex-row gap-7 text-white mt-16">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                <div className="flex">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7">
          <div className="flex flex-row gap-5 mb-10 mt-[110px]">
            <div className="text-4xl font-semibold w-[45%]">
              Get the Skills you need for a{" "}
              <HighlightText text={"job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <p className="font-inter text-[16px]"> The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
          <TimelineSection />
          <LearninglanguageSection/>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-11/12 max-auto max-w-maxContent flex flex-col justify-between gap-8 bg-richblack-900  text-white items-center">
            <InstructorSection/>
            <h2 className=" text-center text-4xl font-semibold mt-10 ">Review from other Learners</h2>
            {/* review slider */}
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};
export default Home;
