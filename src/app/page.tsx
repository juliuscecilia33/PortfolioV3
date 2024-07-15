"use client";

import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-full px-[25%] flex flex-col py-10">
      <Hero />
      <h2 className="mt-10 mb-3 text-2xl font-bold">Experience</h2>
      <div className="w-full bg-[#F8F8FA] p-10 flex justify-center rounded-lg"></div>
    </div>
  );
}
