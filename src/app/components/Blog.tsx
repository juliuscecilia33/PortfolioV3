"use client";

import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "../utils/animations";

type BlogProps = {
  blogLink: string;
  backgroundColor: string;
  blogTitle: string;
  blogDescription: string;
};

const Blog = ({
  blogLink,
  backgroundColor,
  blogTitle,
  blogDescription,
}: BlogProps) => {
  return (
    <motion.div
      className={`w-full bg-[#${backgroundColor}] dark:bg-[#2a2a2a] p-6 md:p-10 flex flex-col justify-center rounded-lg mb-4 md:mb-2 transition-colors duration-300`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-[#96979A] dark:text-gray-400 text-xs md:text-sm">medium.com</p>
        <Link href={blogLink} target="_blank" rel="noopener noreferrer">
          <MdOutlineOpenInNew className="text-[#96979A] dark:text-gray-400 hover:text-[#E95278] dark:hover:text-[#E95278] transition-colors" size={20} />
        </Link>
      </div>
      <h2 className="text-lg md:text-xl text-black dark:text-white font-bold mb-2">
        {blogTitle}
      </h2>
      <p className="text-[#96979A] dark:text-gray-400 text-sm mb-2">{blogDescription}</p>
    </motion.div>
  );
};

export default Blog;
