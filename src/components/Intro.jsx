import { useEffect, useState } from "react";
import { CommandLine } from "../components/CommandLine.jsx";
import { Navbar } from "./Navbar.jsx";
import Typewriter from "typewriter-effect";

export const Intro = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!false);
    }, 500);
  }, []);
  return (
    <div className="app-intro">
      <Navbar />
      <span className="host">
        mrk@root &gt;
        <Typewriter
          options={{
            autoStart: true,
            cursor: "",
            delay: 1,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("mrk.sh").start();
          }}
        />
      </span>
      {showComponent && (
        <div>
          <h2 className="app-intro-title">Welcome</h2>
          <p>
            welcome to my personal page :D <br /> here i want to share
            everything you may want to know about me. <br /> feel free to drop
            some feedback. thank u for passing by!
          </p>
          <CommandLine />
        </div>
      )}
    </div>
  );
};
