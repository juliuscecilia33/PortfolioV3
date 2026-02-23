"use client";

import Experience from "../components/Experience";
import Adobe from "../../assets/AdobeRedLogo.png";
import IQAir from "../../assets/IQAir.png";
import Chimerocyte from "../../assets/Chimerocyte.png";
import Leaps from "../../assets/LeapsLogo.png";
import BookedBy from "../../assets/BookedBy.jpg";
import TSA from "../../assets/TSA.png";
import { motion } from "framer-motion";

const Experiences = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Experience
        imageSrc={TSA}
        imageAlt="Texas Sports Academy"
        description={[
          "Redesigned key website flows by consolidating lead, facility, and heat maps into a single interactive map experience, enabling prospective families to discover nearby interested families, partnered facilities, and high-density areas",
          "Developed a computer-vision–based application using **React Native**, **Python**, **Postgres**, and **MediaPipe Pose** to detect and analyze volleyball swing mechanics, generating automated performance reports and 3D skeletal visualizations",
          "Built a data-scraping and analysis tool with aggregating publicly available Texas real estate listings to identify optimal locations for future Texas Sports Academy facilities",
        ]}
        positionName="Software Engineer"
        companyName="Texas Sports Academy"
        location="Austin, Texas"
        backgroundColor="#F8F8FA"
        dateOfExperience="February 2026 - Present"
      />
      <Experience
        imageSrc={BookedBy}
        imageAlt="BookedBy"
        description={[
          "Led full lifecycle development of **Bookedby's Queue** from prototyping and design to building a fully functional product component",
          "Enhanced the **Sales flow** and interface, improving usability and visual appeal to boost user engagement",
          "Developed new **Appointment Book** features including rebooking functionality, booking additional appointments, and mobile-friendly design",
          "Built the **Transactions page** by integrating backend data, enabling users to view their transaction history clearly and efficiently",
        ]}
        positionName="Software Engineer"
        companyName="BookedBy"
        location="Austin, Texas"
        backgroundColor="#FFFFFF"
        dateOfExperience="February 2025 - January 2026"
      />
      <Experience
        imageSrc={Leaps}
        imageAlt="Leaps"
        description={[
          "Led a team of five using agile methodologies to develop a social communication app for sports enthusiasts",
          "Utilized **Flutter**, **Node.js**, and **AWS services** (S3, RDS, API Gateway, Cognito) to create a mobile app enhancing user engagement",
          "Secured **$8k in funding** from the AWS Startup Program",
          "Showcased project at **UW's 2024 Science and Technology Showcase**, highlighting innovation in sports technology",
        ]}
        positionName="Co-Founder and Software Engineer"
        companyName="Leaps"
        location="Seattle, Washington"
        backgroundColor="#F8F8FA"
        dateOfExperience="November 2023 - May 2024"
      />
      <Experience
        imageSrc={Adobe}
        imageAlt="Adobe 2023"
        description={[
          "Developed dynamic email automation solution using **Actionable Messages/Adaptive Cards** and **AMP for Gmail**, optimizing product approval workflows and cutting errors by **30%**",
          "Integrated solution with Adobe's backend using Python and Node.js for security and reliability",
          "Helped transition Adobe's Console for Businesses from **Angular.js to React.js**, ensuring smooth integration and performance",
          "Implemented comprehensive testing using Jasmine.js and Jest.js",
        ]}
        positionName="Software Engineer Intern"
        companyName="Adobe"
        location="Seattle, Washington"
        backgroundColor="#FFFFFF"
        dateOfExperience="June 2023 - September 2023"
      />
      <Experience
        imageSrc={Adobe}
        imageAlt="Adobe 2022"
        description={[
          "Implemented **read-only access mode** for Adobe's Console for Businesses using React.js, Angular.js, and Java, improving support processes by **40%**",
          "Refined data and authentication logic to establish **role-based access control** with token-based authentication",
          "Integrated backend APIs to validate user permissions in real-time",
          "Addressed customer security concerns while ensuring secure and streamlined access for users",
        ]}
        positionName="Software Engineer Intern"
        companyName="Adobe"
        location="Seattle, Washington"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2022 - September 2022"
      />
      <Experience
        imageSrc={IQAir}
        imageAlt="IQAir"
        description={[
          "Implemented real-time enhancements across **40+ tickets** using Angular.js, React.js, and Redux, updating **70+ translated versions** of the site",
          "Deployed regional site with Drupal CMS and CDN feature, ensuring seamless access for over **1.5 million users** in their native languages",
          "Developed automated migration scripts with Shopify/PHP to consolidate global stores",
          "Effectively reduced company overhead and improved user experience without service interruptions",
        ]}
        positionName="Software Engineer Intern"
        companyName="IQAir"
        location="La Mirada, California"
        backgroundColor="#FFFFFF"
        dateOfExperience="June 2021 - September 2021"
      />
      <Experience
        imageSrc={Chimerocyte}
        imageAlt="Chimerocyte"
        description={[
          "Created React.js website integrated with **AWS** (Amplify, Cognito, Route 53, EC2, Lambda, S3) for employees across all levels",
          "Facilitated robust **laboratory management system** for seamless collaboration and productivity",
          "Unified extraction scripts using Python, simplifying upload of patient and donor documents to AWS S3 Buckets",
          "Enhanced data management and workflow efficiency organization-wide",
        ]}
        positionName="Software Engineer Intern"
        companyName="Chimerocyte"
        location="Seattle, Washington"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2021 - September 2021"
      />
    </motion.div>
  );
};

export default Experiences;
