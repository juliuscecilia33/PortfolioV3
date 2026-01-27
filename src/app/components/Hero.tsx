"use client";

import Link from "next/link";
import Image from "next/image";
import MyProfile from "../../assets/JuliusCeciliaGrad.png";
import { motion } from "framer-motion";
import { heroContainer, heroItem, profileImage } from "../utils/animations";

const Hero = () => {
  const sendEmail = () => {
    window.location.href = "mailto:juliuscecilia33@outlook.com";
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10"
      variants={heroContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={profileImage}>
        <Image
          src={MyProfile}
          alt="My Profile"
          width={150}
          height={150}
          className="aspect-square rounded-full mb-4 sm:mb-5"
        />
      </motion.div>
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-black dark:text-white"
        variants={heroItem}
      >
        Julius Cecilia
      </motion.h1>
      <motion.button
        onClick={sendEmail}
        className="bg-[#E95278] text-white px-4 py-2 rounded-md text-xs sm:text-sm font-medium mb-4 sm:mb-5 hover:bg-[#d44165] transition-colors"
        variants={heroItem}
      >
        Open to Work
      </motion.button>
      <motion.p
        className="text-[#747371] dark:text-gray-400 text-center text-xs sm:text-sm mb-2 sm:mb-3 max-w-md mx-auto"
        variants={heroItem}
      >
      Curious about building software and interfaces that turn real problems into useful, human-centered apps and websites.
      </motion.p>
      <motion.p
        className="text-[#747371] dark:text-gray-400 text-xs sm:text-sm mt-4"
        variants={heroItem}
      >
        Find me on:{" "}
        <Link
          href="https://github.com/juliuscecilia33"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 mr-2 hover:text-[#E95278] dark:hover:text-[#E95278] transition-colors"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/julius-cecilia/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mr-2 hover:text-[#E95278] dark:hover:text-[#E95278] transition-colors"
        >
          Linkedin
        </Link>
        <Link
          href="https://medium.com/@juliuscecilia33"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mr-2 hover:text-[#E95278] dark:hover:text-[#E95278] transition-colors"
        >
          Medium
        </Link>
        <Link
          href="https://drive.google.com/file/d/1PGq2Sr5fPQwwdXAWR-37msx1yHYV-FAi/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#E95278] dark:hover:text-[#E95278] transition-colors"
        >
          Resume
        </Link>
      </motion.p>
    </motion.div>
  );
};

export default Hero;
