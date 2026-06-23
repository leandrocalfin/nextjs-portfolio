import React from "react";

const ProjectTag = ({ name, label, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-primary-500 text-[#1F2937] dark:text-white bg-transparent"
    : "border-primary-500 text-[#1F2937] dark:text-white bg-transparent hover:bg-primary-500 hover:text-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-base font-medium cursor-pointer transition-colors`}
      onClick={() => onClick(name)}
    >
      {label || name}
    </button>
  );
};

export default ProjectTag;