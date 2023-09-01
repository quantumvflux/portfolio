import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";

const page = () => {
  return (
    <div className="font-fira">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
