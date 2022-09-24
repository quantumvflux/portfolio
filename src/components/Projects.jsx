import TypeWriterEffect from "react-typewriter-effect";
import { Navbar } from "./Navbar";
import { CommandLine } from "./CommandLine";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!false);
    }, 600);
  }, []);
  return (
    <div>
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
          text="mrk --projects"
          typeSpeed={25}
        />
      </span>
      {showComponent && (
        <div>
          <p>here are some projects i have worked on:</p>
          <ul className="projects-list">
            <li>
              <a href="https://nephilimoficial.com" target="_BLANK">
                -&gt; Nephilim Official Page
              </a>
            </li>
            <li>
              <a
                href="https://quantumvflux.github.io/react-weather-app/"
                target="_BLANK"
              >
                -&gt; React Weather App
              </a>
            </li>
            <li>
              <a
                href="https://quantumvflux.github.io/react-task-app/"
                target="_BLANK"
              >
                -&gt; React Task App
              </a>
            </li>
          </ul>
          <p>i will eventually add new projects so stick around :D</p>
          <CommandLine />
        </div>
      )}
    </div>
  );
};
