"use client";

import Leaps from "../../assets/LeapsLogo.png";
import SageLogo from "../../assets/SageLogo.png";
import Joblicant from "../../assets/Joblicant.png";
import ChatPulse from "../../assets/ChatPulse.png";
import FAInitiative from "../../assets/FAInitiative.png";
import InstaDeck from "../../assets/InstaDeck.png";
import HoopsPredictor from "../../assets/HoopsPredictor.png";
import FAOutlets from "../../assets/FAOutlets.png";
import CycleScan from "../../assets/CycleScan.png";
import Project from "../components/Project";
import DineLogo from "../../assets/DineLogo.png";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap w-full justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Project
        imageSrc={DineLogo}
        imageAlt="Dine"
        projectName="Dine"
        projectDescription="Dine is a cross-platform mobile application designed to make living with food allergies safer and easier."
        projectLink="https://github.com/SageDevelopmentCode/dineapp"
      />
      <Project
        imageSrc={DineLogo}
        imageAlt="Dine"
        projectName="Dine Web"
        projectDescription="Dine Web provides shareable web profiles for users and restaurants to communicate food allergy information, safety protocols, and dietary accommodations."
        projectLink="https://github.com/SageDevelopmentCode/dine-web"
      />
      {/* <Project
        imageSrc={SageLogo}
        imageAlt="Sage"
        projectName="Sage"
        projectDescription="An engaging and interactive app designed to inspire growth for both kids and adults."
        projectLink="https://github.com/juliuscecilia33/sagev2-mobile"
      />
      <Project
        imageSrc={SageLogo}
        imageAlt="Sage"
        projectName="Sage (Backend)"
        projectDescription="The backend of SageV2 is built with Golang, Docker, and PostgreSQL, ensuring a scalable foundation for the app's interactive and features."
        projectLink="https://github.com/juliuscecilia33/sagev2"
      /> */}
      <Project
        imageSrc={HoopsPredictor}
        imageAlt="HoopsPredictor"
        projectName="HoopsPredictor"
        projectDescription="Code that predicts NBA game outcomes using machine learning techniques. It utilizes historical game data sourced from the NBA API to train a RandomForestClassifier model."
        projectLink="https://github.com/juliuscecilia33/NBA-Game-Predictions"
      />

      <Project
        imageSrc={ChatPulse}
        imageAlt="ChatPulse"
        projectName="ChatPulse"
        projectDescription="This Java-based chat application features real-time typing indicators, allowing users to see when someone is typing a message."
        projectLink="https://github.com/juliuscecilia33/ChatPulse"
      />
      <Project
        imageSrc={Leaps}
        imageAlt="Leaps"
        projectName="Leaps"
        projectDescription="A mobile app that empowers people to create and manage sports teams within a unique interactivity space."
        projectLink="https://github.com/leaps-live"
      />
      <Project
        imageSrc={FAInitiative}
        imageAlt="FAInitiative"
        projectName="FA Initiative"
        projectDescription="A reddit-inspired social media hub that connects people with food allergies and allows assemblies or posts to be created."
        projectLink="https://github.com/juliuscecilia33/FAInitiative"
      />
      <Project
        imageSrc={InstaDeck}
        imageAlt="InstaDeck"
        projectName="InstaDeck"
        projectDescription="A semi-dashboard interface of Instagram made with React and Google Firebase."
        projectLink="https://github.com/juliuscecilia33/InstaDeck"
      />
      <Project
        imageSrc={Joblicant}
        imageAlt="Joblicant"
        projectName="Joblicant"
        projectDescription="A dashboard interface showcasing all your job applications in one place."
        projectLink="https://github.com/juliuscecilia33/Joblicant"
      />
      <Project
        imageSrc={FAOutlets}
        imageAlt="FAOutlets"
        projectName="FAOutlets"
        projectDescription="An E-commerce Store that combines all Food Allergy manufacturers and products into one online hub."
        projectLink="https://github.com/juliuscecilia33/FAOutlets"
      />
      <Project
        imageSrc={CycleScan}
        imageAlt="CycleScan"
        projectName="CycleScan"
        projectDescription="Cross-platform mobile application that determines whether an object is recyclable, compostable or neither using object recognition. My team won the Wolfram Alpha Track Prize by SD Hacks 2021."
        projectLink="https://github.com/bkenza/CycleScan"
      />
    </motion.div>
  );
};

export default Projects;
