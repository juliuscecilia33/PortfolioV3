"use client";

import Image, { StaticImageData } from "next/image";
import { highlightKeywords } from "../utils/highlightKeywords";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "../utils/animations";

type ExperienceProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string | string[];
  location: string;
  positionName: string;
  dateOfExperience: string;
  backgroundColor: string;
  companyName: string;
};

const Experience = ({
  imageSrc,
  imageAlt,
  description,
  positionName,
  backgroundColor,
  location,
  dateOfExperience,
  companyName,
}: ExperienceProps) => {
  return (
    <motion.div
      className={`w-full bg-[${backgroundColor}] dark:bg-[#2a2a2a] p-6 md:p-10 flex flex-col md:flex-row justify-center rounded-lg mb-4 md:mb-1 transition-colors duration-300`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      whileHover="hover"
      animate="rest"
    >
      <div className="flex justify-center md:w-[25%] mb-4 md:mb-0">
        <div className="w-28 h-28 aspect-square flex p-6 bg-white dark:bg-gray-800 rounded items-center justify-center transition-colors duration-300">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto rounded-lg items-center"
          />
        </div>
      </div>
      <div className="flex flex-col md:w-[75%]">
        <div className="flex flex-col">
          <p className="text-[#96979A] dark:text-gray-400 text-sm mb-2">{dateOfExperience}</p>
          <h2 className="text-lg text-black dark:text-white font-bold mb-2">
            {positionName} @{" "}
            <span className="text-[#E95278]">{companyName}</span>
          </h2>
          <p className="text-[#96979A] dark:text-gray-400 text-sm mb-2">{location}</p>
          <div className="text-black dark:text-gray-300 text-sm mb-2">
            {Array.isArray(description) ? (
              <ul className="space-y-2">
                {description.map((bullet, index) => (
                  <li key={index}>{highlightKeywords(bullet)}</li>
                ))}
              </ul>
            ) : (
              <p>{highlightKeywords(description)}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
