"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "../utils/animations";

type ProjectProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

const Project = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectLink,
}: ProjectProps) => {
  return (
    <motion.div
      className="w-full sm:w-[48%] lg:w-[30%] mb-6 bg-[#F8F8FA] dark:bg-[#2a2a2a] flex flex-col p-4 sm:p-6 lg:p-8 rounded-lg transition-colors duration-300"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 aspect-square flex p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full items-center justify-center transition-colors duration-300">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto rounded-lg"
          />
        </div>
        <Link href={projectLink} target="_blank" rel="noopener noreferrer">
          <MdOutlineOpenInNew className="text-[#96979A] dark:text-gray-400 hover:text-[#E95278] dark:hover:text-[#E95278] transition-colors" size={20} />
        </Link>
      </div>
      <h2 className="text-base sm:text-lg text-black dark:text-white font-bold mb-2">
        {projectName}
      </h2>
      <p className="text-xs sm:text-sm text-[#96979A] dark:text-gray-400 mb-2">
        {projectDescription}
      </p>
    </motion.div>
  );
};

export default Project;
