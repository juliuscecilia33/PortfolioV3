"use client";

import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Experiences from "./containers/Experiences";
import Projects from "./containers/Projects";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";
import Adobe from "../assets/AdobeRedLogo.png";
import IQAir from "../assets/IQAir.png";
import Leaps from "../assets/LeapsLogo.png";
import FancyTestimonialsSlider from "./components/Testimonials";

export default function Home() {
  const testimonials = [
    {
      img: Adobe,
      quote:
        "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: IQAir,
      quote:
        "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: Leaps,
      quote:
        "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];

  return (
    <div className="w-full px-[25%] flex flex-col py-10">
      <Hero />
      <h2 className="mt-10 mb-3 text-2xl font-bold">Experience</h2>
      <Experiences />
      <h2 className="mt-14 mb-3 text-2xl font-bold">Projects</h2>
      <div className="flex flex-wrap w-full justify-between">
        <Projects />
      </div>
      <h2 className="mt-14 mb-3 text-2xl font-bold">Blogs</h2>
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/predicting-nba-game-results-using-machine-learning-and-python-6be209d6d165"
        backgroundColor="F8F8FA"
        blogTitle="Predicting NBA Game Results Using Machine Learning and Python"
        blogDescription="Being a passionate fan of the National Basketball Association (NBA), specifically the Los Angeles Lakers, I was disappointed after we lost to the Denver Nuggets to end our season. I found myself wanting to determine our chances of defeating the defending champions from last season, the Boston Celtics."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/building-real-time-typing-indicators-in-java-19e245539794"
        backgroundColor="FFFFFF"
        blogTitle="Building Real-Time Typing Indicators in Java"
        blogDescription="I’ve always been fascinated by the subtle yet powerful ways technology influences human interaction. One particular feature that caught my attention early on was the real-time typing indicators in messaging apps, showing when a user is typing."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/how-leetcode-skills-transformed-my-note-taking-app-4ccd88d023b8"
        backgroundColor="F8F8FA"
        blogTitle="How LeetCode Transformed My Note-Taking App"
        blogDescription="I've been solving LeetCode problems to prepare for software engineering job interviews and like many, I initially thought that the data structures and algorithms emphasized in these problems would rarely be encountered in real-life work and projects. However, my recent experience proved otherwise."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/picking-the-right-tech-stack-prisma-supabase-and-next-js-1ea3c17032c3"
        backgroundColor="FFFFFF"
        blogTitle="Picking the right tech stack: Prisma, Supabase, and Next.js"
        blogDescription="As a developer, choosing the right tech stack for a project can be both exciting and daunting. After much research and experimentation, I settled on using Prisma, Supabase, and Next.js for my latest project, a note-taking app."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/embracing-kobe-bryants-work-ethic-in-software-engineering-db1aaa68453a"
        backgroundColor="F8F8FA"
        blogTitle="Embracing Kobe Bryant’s Work Ethic in Software Engineering"
        blogDescription="Kobe’s relentless dedication to mastering the fundamentals of basketball is a philosophy I look to adopt in my own journey as a software engineer. Just as Kobe perfected his footwork and shooting form, I’m committed to mastering the basics of programming."
      />
      <h2 className="mt-14 mb-3 text-2xl font-bold">Testimonials</h2>
      <FancyTestimonialsSlider testimonials={testimonials} />
    </div>
  );
}
