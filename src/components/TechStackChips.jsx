// Example: TechStackChips.jsx
import React from "react";



function TechStackChips({ techs }) {
  return (
    <div className="flex flex-wrap gap-3  my-8 rounded-lg">
      {techs.map((tech, idx) => (
        <span
          key={idx}
          className="bg-[#263366] text-blue-100 px-4 py-1 rounded-full text-base font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default TechStackChips;