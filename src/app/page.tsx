"use client";

import Image from "next/image";
import MyProfile from "../assets/JuliusCeciliaGrad.png";
import Link from "next/link";

export default function Home() {
  const sendEmail = () => {
    window.location.href = "mailto:juliuscecilia33@outlook.com";
  };

  return (
    <div className="w-full px-[20%] flex flex-col items-center justify-center py-10">
      <Image
        src={MyProfile}
        alt="My Profile>"
        width={175}
        height={175}
        className="aspect-square rounded-full mb-5"
      />
      <h1 className="text-3xl font-bold mb-5">Julius Cecilia</h1>
      <button
        onClick={sendEmail}
        className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-lg text-sm font-medium"
      >
        Open to Work
      </button>
      <p className="text-[#747371] text-sm mb-3">
        Software Engineer from Los Angeles, California
      </p>
      <p className="text-[#747371] text-sm mb-5">
        Find me on:{" "}
        <Link
          href="https://github.com/juliuscecilia33"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 mr-2"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/julius-cecilia/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mr-2"
        >
          Linkedin
        </Link>
        <Link
          href="https://medium.com/@juliuscecilia33"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mr-2"
        >
          Medium
        </Link>
        <Link
          href="https://drive.google.com/file/d/1yl3ujeOWJF7Cve_LwerkYT4xXZGth7Kb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Resume
        </Link>
      </p>
    </div>
  );
}
