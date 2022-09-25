import { useState, useEffect } from "react";
import { Navbar } from "./Navbar.jsx";
import { CommandLine } from "./CommandLine.jsx";
import Typewriter from "typewriter-effect";

export const Projects = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!false);
    }, 1000);
  }, []);
  return (
    <div>
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
            typewriter.typeString("mrk --projects").start();
          }}
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
