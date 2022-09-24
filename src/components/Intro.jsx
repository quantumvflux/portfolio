import { useEffect, useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { CommandLine } from "../components/CommandLine";
import { Navbar } from "./Navbar";
export const Intro = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!false);
    }, 750);
  }, []);
  return (
    <div className="app-intro">
      <Navbar />
      <span className="host">
        mrk@root &gt;
        <TypeWriterEffect
          className=""
          textStyle={{
            fontFamily: "jetbrains-mono",
            fontSize: "12px",
            fontWeight: "400",
          }}
          startDelay={25}
          cursorColor="white"
          text="mrk.sh"
          typeSpeed={25}
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
