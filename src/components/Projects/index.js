import { useState, useEffect } from "react";
import Loader from "react-loaders";
import MultiActionAreaCard from "./MultiActionCard"; // Update the path accordingly
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000);
  }, []);

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
            letterClass={letterClass} 
            strArray={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s", "!"]} 
            idx={15} 
            />
          </h1>
          <p>
            Here are some of the projects that I have worked on (so far!) during my journey as an undergraduate student!
          </p>
          <p>
            My projects range from fun little games to paper-based studies, passing through programs incorporating algorithmic techniques for AI. Those projects include solo works as well as group works.
          </p>
          <p>
            Since my major focuses on smart systems, I am mostly interested in AI, cybersecurity and prefer more practical projects. However, also greatly enjoy building simple mini games as a hobby!
          </p>
        </div>
        <div className="cards-container">
          <MultiActionAreaCard />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
