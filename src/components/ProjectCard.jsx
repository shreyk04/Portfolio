import React from "react";
import FeaturePoint from "./FeaturePoint";
import TechStackChips from "./TechStackChips";
import ButtonWithArrow from "./ButtonWithArrow";

function ProjectCard({ project }) {
  const {
    title,
    description,
    features,
    howItHelps,
    techStack,
    githublink,
    livelink,
  } = project;
  console.log(project);
  return (
    <div className="w-full shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 md:w-[48%] bg-gray-800 border-[1px] border-gray-700">
      <h1 className="md:text-3xl text-xl  font-bold mb-4 text-center text-white">
        {title}
      </h1>
      <TechStackChips techs={techStack} />
      <h1 className="text-md text-white font-semibold mb-2">Description</h1>
      <p className="text-gray-400 mb-6">{description}</p>
      {/* <h1 className="text-md text-white  font-semibold mb-2">How it Helps</h1>
      <p className="text-gray-400 mb-6">{howItHelps}</p> */}
      <h1 className="text-md text-white  font-semibold mb-2">Features</h1>
      <ul>
        {features.map((feature, index) => (
          <FeaturePoint key={index} text={feature} />
        ))}
      </ul>
      <div className="flex flex-col gap-2 w-full md:w-full md:flex-row justify-center items-center  mt-6 ">
     
        <ButtonWithArrow text="GitHub" livelink={githublink} />
        <ButtonWithArrow text="Live Demo" livelink={livelink} color={"linear-gradient(135deg, #6253e1, #04befe)"}/>
      </div>
    </div>
  );
}

export default ProjectCard;
