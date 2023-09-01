import Subtitle from "../components/subtitle/Subtitle";
import ContactButton from "./components/ContactButton";

const Contact = () => {
  return (
    <div className="w-11/12 md:w-1/2 m-auto">
      <Subtitle text="contact:_" />
      <p>you can reach to me in my socials :D</p>

      <div className="flex flex-col items-center md:items-start gap-2 mt-8">
        <ContactButton
          color="blue"
          title="linkedin"
          link="https://www.linkedin.com/in/marcos-baravalle/"
        />
        <ContactButton
          color="purple"
          title="github"
          link="https://github.com/quantumvflux"
        />
        <ContactButton
          color="slate"
          title="discord"
          link="https://discord.com/channels/quantumflux"
        />
        <ContactButton
          color="green"
          title="spotify"
          link="https://open.spotify.com/user/marcosfloyd73?si=9919237ba1b84b3e"
        />
      </div>
    </div>
  );
};

export default Contact;
