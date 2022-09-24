import TypeWriterEffect from "react-typewriter-effect";
import { Navbar } from "./Navbar";
import { CommandLine } from "./CommandLine";
import { useEffect, useState } from "react";
export const Myself = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!false);
    }, 600);
  }, []);
  return (
    <div className="app-home">
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
          text="mrk --myself"
          typeSpeed={25}
        />
      </span>
      {showComponent && (
        <div>
          <h1></h1>
          <p>
            hello there! <br />
            my name is Marcos (or mark) and i develop websites as a fromtend web
            developer.
          </p>
          <p>
            i love programming, videogames, linux, economics and music
            production.
          </p>
          <p>
            {" "}
            im currently learning about react, linux customization and vim.
          </p>
          <p>here are some of my links: </p>
          <div className="home-links">
            <a href="https://github.com/quantumvflux" target="_BLANK">
              github
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-baravalle-644ab4233/"
              target="_BLANK"
            >
              linkedIn
            </a>
            <a
              href="https://discordapp.com/users/696436407283089443"
              target="_BLANK"
            >
              discord
            </a>
            <a
              href="https://open.spotify.com/user/marcosfloyd73?si=eed0717e9efb4be6"
              target="_BLANK"
            >
              spotify
            </a>
            <p>other relevant data:</p>
            <ul className="other-data">
              pc:
              <li>
                <ul className="myself-setup">
                  <li>processor: intel celeron g5905</li>
                  <li>ram: 8gb</li>
                  <li>keyboard: redragon dragonborn with brown switches</li>
                  <li>mouse: logitech g203</li>
                  <li>audio card: behringer u-phoria umc22</li>
                </ul>
              </li>
              os:
              <li>
                <ul className="myself-os">
                  <li>operating system: vanilla arch linux</li>
                  <li>window manager: bspwm</li>
                  <li>code editor: vscode & vim</li>
                  <p>screenshots & dotfiles pretty soon!</p>
                </ul>
              </li>
            </ul>
            <CommandLine />
          </div>
        </div>
      )}
    </div>
  );
};
