import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="max-w-4xl mx-auto rounded-2xl border border-[#d6d0c5] dark:border-[#33353F] bg-[#F3EDE2] dark:bg-[#181818] px-8 py-10 shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-[#007ACC] hover:shadow-[0_16px_36px_rgba(0,122,204,0.20)]">
      <h5 className="text-3xl font-bold mb-6 text-[#1F2937] dark:text-white">
        {title}
      </h5>

      <p className="text-[#4B5563] dark:text-[#ADB7BE] leading-8 text-lg text-justify">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;