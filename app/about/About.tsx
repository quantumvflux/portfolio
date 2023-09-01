import TechStack from "./components/TechStack/TechStack";
import Subtitle from "../components/subtitle/Subtitle";

const About = () => {
  return (
    <div className="w-11/12 md:w-1/2 m-auto pb-12">
      <Subtitle text="about:_" />
      <p>
        Hello, everyone! I'm Marcos, a freelance web developer hailing from
        Argentina. Specializing in crafting bespoke digital marketing solutions,
        my focus is on tailoring these to suit your enterprise or personal
        brand. Leveraging my expertise, your online presence can be transformed,
        enabling you to reach your business objectives. My creative thinking and
        problem-solving abilities are fueled by a passion for technology,
        entrepreneurship, video games, music, and economics. Embracing new ideas
        and maintaining an open mind allows me to approach projects from various
        angles, ensuring the delivery of innovative solutions ^^
      </p>
      <TechStack />
    </div>
  );
};

export default About;
