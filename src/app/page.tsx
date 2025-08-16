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
import { useEffect } from "react";

export default function Home() {
  const testimonials = [
    {
      img: Adobe,
      quote:
        "He was a culture fit for our team at Adobe, but I also believe he would fit in anywhere where hard work and collaboration are valued.",
      name: "Kellen C. - ",
      role: "My Mentor at Adobe",
    },
    {
      img: IQAir,
      quote:
        "Julius is extremely talented and a quick study. To the point that despite him not finishing his education, I was ready to offer him a full-time position.",
      name: "Rohan J.",
      role: "My Manager at IQAir",
    },
    {
      img: Leaps,
      quote:
        "He is well ahead of his peers, in my opinion, and I look forward to continuing to be a part of his life and career.",
      name: "Rishad B.",
      role: "My Mentor",
    },
    {
      img: Leaps,
      quote:
        "Julius is passionate about creating brand new ideas about technology",
      name: "Ian L.",
      role: "My Teammate",
    },
  ];

  const sections = [
    { id: "Experience", title: "Experience" },
    { id: "Projects", title: "Projects" },
    { id: "Blogs", title: "Blogs" },
    { id: "Recommendations", title: "Recommendations" },
    { id: "Connect", title: "Connect" },
  ];

  const sendEmail = () => {
    window.location.href = "mailto:juliuscecilia33@outlook.com";
  };

  const makeCall = () => {
    window.location.href = "tel:+5623324687"; // Replace +1234567890 with the actual phone number
  };

  return (
    <div className="w-full px-5 sm:px-10 md:px-[15%] lg:px-[25%] flex flex-col py-10">
      <Hero />
      <div
        id="nav"
        className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              const element = document.getElementById(section.id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mb-5 text-[#96979A] px-5 py-2 rounded-md text-sm font-medium"
          >
            {section.title}
          </button>
        ))}
      </div>
      <h2 id="Experience" className="mt-10 mb-3 text-2xl font-bold">
        Experience
      </h2>
      <Experiences />
      <h2 id="Projects" className="mt-14 mb-3 text-2xl font-bold">
        Projects
      </h2>
      <div className="flex flex-wrap w-full justify-between">
        <Projects />
      </div>
      <h2 id="Blogs" className="mt-14 mb-3 text-2xl font-bold">
        Blogs
      </h2>
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/go-fiber-radix-trees-9a1befb873f2"
        backgroundColor="F8F8FA"
        blogTitle="Go Fiber: Radix Trees"
        blogDescription="One of the coolest things I’ve learned about Go Fiber is how it uses a Radix Tree for routing."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/gorm-in-golang-transaction-management-callbacks-and-preloading-41a30a2498ab"
        backgroundColor="FFFFFF"
        blogTitle="GORM in Golang: Transaction Management, Callbacks, and Preloading"
        blogDescription="I needed a reliable ORM to handle the database interactions."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/understanding-embeddings-with-pinecone-9f765b490387"
        backgroundColor="F8F8FA"
        blogTitle="Understanding Embeddings with Pinecone"
        blogDescription="ecently, I took a deep dive into Pinecone (https://www.pinecone.io/), a vector database designed for high-dimensional data like embeddings."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/planning-out-the-architecture-of-my-educational-app-for-kids-f0444b021c47"
        backgroundColor="FFFFFF"
        blogTitle="Planning Out the Architecture of My Educational App for kids"
        blogDescription="Here’s the tech: React Native for the mobile apps, Golang for the backend, PostgreSQL for the database, and Docker for containerization."
      />
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
        blogDescription="I&rsquo;ve always been fascinated by the subtle yet powerful ways technology influences human interaction. One particular feature that caught my attention early on was the real-time typing indicators in messaging apps, showing when a user is typing."
      />
      <Blog
        blogLink="https://medium.com/@juliuscecilia33/how-leetcode-skills-transformed-my-note-taking-app-4ccd88d023b8"
        backgroundColor="F8F8FA"
        blogTitle="How LeetCode Transformed My Note-Taking App"
        blogDescription="I&rsquo;ve been solving LeetCode problems to prepare for software engineering job interviews and like many, I initially thought that the data structures and algorithms emphasized in these problems would rarely be encountered in real-life work and projects. However, my recent experience proved otherwise."
      />
      <h2 id="Recommendations" className="mt-14 mb-3 text-2xl font-bold">
        Recommendations
      </h2>
      <FancyTestimonialsSlider testimonials={testimonials} />
      <h2 id="Connect" className="mt-14 mb-3 text-2xl font-bold">
        Let&rsquo;s Connect
      </h2>
      <div className="flex flex-col">
        <button
          onClick={sendEmail}
          className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Email me: juliusscecilia33@gmail.com
        </button>
        <button
          onClick={makeCall}
          className="bg-[#E95278] mb-5 text-white px-5 py-2 rounded-md text-sm font-medium"
        >
          Call me: 562-332-4687
        </button>
      </div>
    </div>
  );
}
