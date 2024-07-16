"use client";

import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Adobe from "../assets/AdobeRedLogo.png";
import IQAir from "../assets/IQAir.png";
import Chimerocyte from "../assets/Chimerocyte.png";
import Leaps from "../assets/LeapsLogo.png";
import Image, { StaticImageData } from "next/image";

export default function Home() {
  return (
    <div className="w-full px-[25%] flex flex-col py-10">
      <Hero />
      <h2 className="mt-10 mb-3 text-2xl font-bold">Experience</h2>
      <Experience
        imageSrc={Leaps}
        imageAlt="Leaps"
        description="I led a team of five using agile methodologies to develop a social communication app for sports enthusiasts. We utilized Flutter, Node.js, AWS services (S3, RDS, API Gateway, Cognito), and PostgreSQL to create a mobile app that enhanced user engagement in sports activities and team collaboration. Our project received $8k in funding from the AWS Startup Program and was showcased at UW's 2024 Science and Technology Showcase, highlighting our innovation in sports technology."
        positionName="Co-Founder and Software Engineer"
        companyName="Leaps"
        location="Seattle, Washington"
        backgroundColor="#F8F8FA"
        dateOfExperience="November 2023 - May 2024"
      />
      <Experience
        imageSrc={Adobe}
        imageAlt="Adobe 2023"
        description="I developed a dynamic email automation solution for Adobe using Microsoft Outlook's Actionable Messages/Adaptive Cards and Google's AMP for Gmail, optimizing product approval workflows and cutting errors by 30%. I integrated this with Adobe's backend using Python and Node.js for security and reliability. Additionally, I helped in the transition of Adobe's Console for Businesses from Angular.js to React.js, ensuring smooth integration and performance using Jasmine.js and Jest.js for testing."
        positionName="Software Engineer Intern"
        companyName="Adobe"
        location="Seattle, Washington"
        backgroundColor="#FFFFFF"
        dateOfExperience="June 2023 - September 2023"
      />
      <Experience
        imageSrc={Adobe}
        imageAlt="Adobe 2022"
        description="I implemented a read-only access mode for Adobe's Console for Businesses using React.js, Angular.js, and Java, addressing customer security concerns and improving support processes by 40%. This involved refining data and authentication logic to establish role-based access control with token-based authentication. I integrated backend APIs to validate user permissions in real-time, ensuring secure and streamlined access for users."
        positionName="Software Engineer Intern"
        companyName="Adobe"
        location="Seattle, Washington"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2022 - September 2022"
      />
      <Experience
        imageSrc={IQAir}
        imageAlt="IQAir"
        description="I implemented real-time enhancements across 40+ tickets using Angular.js, React.js, and Redux, updating 70+ translated versions of the site to improve user experience. I also deployed a regional site with Drupal CMS and its CDN feature, ensuring seamless access for over 1.5 million users in their native languages without service interruptions. Additionally, I developed automated migration scripts with Shopify/PHP to consolidate global stores, effectively reducing company overhead."
        positionName="Software Engineer Intern"
        companyName="IQAir"
        location="La Mirada, California"
        backgroundColor="#FFFFFF"
        dateOfExperience="June 2021 - September 2021"
      />
      <Experience
        imageSrc={Chimerocyte}
        imageAlt="Chimerocyte"
        description="I created a React.js website integrated with AWS (Amplify, Cognito, Route 53, EC2, Lambda, S3) for employees across all levels, facilitating a robust laboratory management system. By leveraging Python, I unified extraction scripts, simplifying the upload of patient and donor documents directly to AWS S3 Buckets. This enhanced data management and workflow efficiency, promoting seamless collaboration and productivity organization-wide."
        positionName="Software Engineer Intern"
        companyName="Chimerocyte"
        location="Seattle, Washington"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2021 - September 2021"
      />
      <h2 className="mt-14 mb-3 text-2xl font-bold">Projects</h2>
      <div className="flex flex-wrap w-full justify-between">
        <div className={`w-[48%] mb-6 bg-[#F8F8FA] flex flex-col p-10 rounded`}>
          <div className="mb-6 w-20 h-20 aspect-square flex p-6 bg-white rounded-full items-center justify-center">
            <Image
              src={Adobe}
              alt={"Adobe"}
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>
          <h2 className="text-lg text-black font-bold mb-2">Instadeck</h2>
          <p className="text-[#96979A] text-sm mb-2">
            I created a React.js website integrated with AWS (Amplify, Cognito,
            Route 53, EC2, Lambda, S3) for employees across all levels,
            facilitating a robust laboratory management system.
          </p>
        </div>
        <div className={`w-[48%] mb-6 bg-[#F8F8FA] flex flex-col p-10 rounded`}>
          <div className="mb-6 w-20 h-20 aspect-square flex p-6 bg-white rounded-full items-center justify-center">
            <Image
              src={Adobe}
              alt={"Adobe"}
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>
          <h2 className="text-lg text-black font-bold mb-2">Instadeck</h2>
          <p className="text-[#96979A] text-sm mb-2">
            I created a React.js website integrated with AWS (Amplify, Cognito,
            Route 53, EC2, Lambda, S3) for employees across all levels,
            facilitating a robust laboratory management system.
          </p>
        </div>
        <div className={`w-[48%] mb-6 bg-[#F8F8FA] flex flex-col p-10 rounded`}>
          <div className="mb-6 w-20 h-20 aspect-square flex p-6 bg-white rounded-full items-center justify-center">
            <Image
              src={Adobe}
              alt={"Adobe"}
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>
          <h2 className="text-lg text-black font-bold mb-2">Instadeck</h2>
          <p className="text-[#96979A] text-sm mb-2">
            I created a React.js website integrated with AWS (Amplify, Cognito,
            Route 53, EC2, Lambda, S3) for employees across all levels,
            facilitating a robust laboratory management system.
          </p>
        </div>
        <div className={`w-[48%] mb-6 bg-[#F8F8FA] flex flex-col p-10 rounded`}>
          <div className="mb-6 w-20 h-20 aspect-square flex p-6 bg-white rounded-full items-center justify-center">
            <Image
              src={Adobe}
              alt={"Adobe"}
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>
          <h2 className="text-lg text-black font-bold mb-2">Instadeck</h2>
          <p className="text-[#96979A] text-sm mb-2">
            I created a React.js website integrated with AWS (Amplify, Cognito,
            Route 53, EC2, Lambda, S3) for employees across all levels,
            facilitating a robust laboratory management system.
          </p>
        </div>
        <div className={`w-[48%] mb-6 bg-[#F8F8FA] flex flex-col p-10 rounded`}>
          <div className="mb-6 w-20 h-20 aspect-square flex p-6 bg-white rounded-full items-center justify-center">
            <Image
              src={Adobe}
              alt={"Adobe"}
              className="w-auto h-auto rounded-lg items-center"
            />
          </div>
          <h2 className="text-lg text-black font-bold mb-2">Instadeck</h2>
          <p className="text-[#96979A] text-sm mb-2">
            I created a React.js website integrated with AWS (Amplify, Cognito,
            Route 53, EC2, Lambda, S3) for employees across all levels,
            facilitating a robust laboratory management system.
          </p>
        </div>
      </div>
    </div>
  );
}
