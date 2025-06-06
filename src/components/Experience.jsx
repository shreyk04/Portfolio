import React from "react";
import FeaturePoint from "./FeaturePoint";
import TechStackChips from "./TechStackChips";
import Title from "./Title";

function Experience() {


 

  return (
    <section>
      <div className="w-full md:h-[100vh] flex flex-col gap-4 mt-10">
        <div className="flex flex-col p-3 md:p-8  h-full">
          <Title text="Work Experience" />
          <div className="bg-gray-700 p-4 rounded-lg shadow-md  w-full">
            <h1 className="text-2xl font-bold  text-white">Capgemini</h1>
            <h2 className="text-xl font-semibold text-white">
              Software Engineer
            </h2>
            <p className="my-1.5 text-gray-100">Oct 2022 - Present</p>
            <TechStackChips
              techs={["JavaScript", "React.js", "HTML", "CSS", "Tailwind Css"]}
            />
            <h1 className="text-xl font-semibold text-white ">
              Key Achivements
            </h1>

            <ul className="list-none mt-4">
              <FeaturePoint
                text={
                  "Designed and developed a React.js based Inventory Management Dashboard,integrating REST APIs for real time stock updates."
                }
              />
              <FeaturePoint
                text={
                  "Implemented interactive and insightful charts using Recharts,enhancing user experience and data visualization."
                }
              />
              <FeaturePoint
                text={
                  "Enhanced user experience with responsive and accessible UI,adhering to modern design principles using Tailwind CSS."
                }
              />
              <FeaturePoint
                text={
                  "Improved app speed by adding lazy loading and code splitting, resulting in a 40% reduction in initial load time."
                }
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
