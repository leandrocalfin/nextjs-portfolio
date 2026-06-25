import React from "react";

const ProjectTag = ({ label }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-xl border border-[#d6d0c5] dark:border-[#33353F] bg-[#F3EDE2] dark:bg-[#181818] px-6 py-3 text-lg font-bold text-[#1F2937] dark:text-white shadow-[0_8px_24px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-[#007ACC] hover:shadow-[0_12px_30px_rgba(0,122,204,0.22)]">
      {label}
    </div>
  );
};

export default ProjectTag;