import Leaps from "../../assets/LeapsLogo.png";
import Sage from "../../assets/SageV2.png";
import Joblicant from "../../assets/Joblicant.png";
import ChatPulse from "../../assets/ChatPulse.png";
import FAInitiative from "../../assets/FAInitiative.png";
import InstaDeck from "../../assets/InstaDeck.png";
import HoopsPredictor from "../../assets/HoopsPredictor.png";
import FAOutlets from "../../assets/FAOutlets.png";
import CycleScan from "../../assets/CycleScan.png";
import Project from "../components/Project";

const Projects = () => {
  return (
    <>
      <Project
        imageSrc={Sage}
        imageAlt="Sage"
        projectName="Sage"
        projectDescription="A note-taking app that allows users to read the Bible, take notes,
            refer to passages, create themes, find community notes, and
            collaborate in community workspaces."
        projectLink="https://github.com/juliuscecilia33/Sage"
      />
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
        projectDescription="This Java-based chat application features real-time typing indicators, allowing users to see when someone is typing a message. Inspired by the subtle yet impactful design of modern messaging apps, this project demonstrates how small features can enhance user experience."
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
        projectDescription="A reddit-inspired social media hub that connects people with food allergies and allows assemblies or posts to be created. Users can discover new foods they can eat, learn an assortment of recipes, read relatable experiences, and meet others to help spread positivity and take initiative towards the problem of food allergies"
        projectLink="https://github.com/juliuscecilia33/FAInitiative"
      />
      <Project
        imageSrc={InstaDeck}
        imageAlt="InstaDeck"
        projectName="InstaDeck"
        projectDescription="A semi-dashboard interface of Instagram made with React and Google Firebase! By providing different “decks” of posts from your personalized following post deck to the trending or popular deck, users of InstaDeck are given a comforting and appealing perspective for their Instagram feed."
        projectLink="https://github.com/juliuscecilia33/InstaDeck"
      />
      <Project
        imageSrc={Joblicant}
        imageAlt="Joblicant"
        projectName="Joblicant"
        projectDescription="A dashboard interface showcasing all your job applications in one place! Users can also save commonly used application information and easily copy/paste that over to whatever they're applying for."
        projectLink="https://github.com/juliuscecilia33/Joblicant"
      />
      <Project
        imageSrc={FAOutlets}
        imageAlt="FAOutlets"
        projectName="FAOutlets"
        projectDescription="An E-commerce Store that combines all Food Allergy manufacturers and products into one online hub. Website is made with React.js, Commerce.js, and Stripe."
        projectLink="https://github.com/juliuscecilia33/FAOutlets"
      />
      <Project
        imageSrc={CycleScan}
        imageAlt="CycleScan"
        projectName="CycleScan"
        projectDescription="Cross-platform mobile application that determines whether an object is recyclable, compostable or neither using object recognition. My team won the Wolfram Alpha Track Prize by SD Hacks 2021."
        projectLink="https://github.com/bkenza/CycleScan"
      />
    </>
  );
};

export default Projects;
