import Tech from "./components/Tech";
import { technologies } from "./services/importAssets";

const TechStack = () => {
  return (
    <div className="mt-4">
      <h3 className="font-medium">my stack</h3>
      <p>technologies that I use on a daily basis</p>
      <div className="flex flex-wrap mt-2">
        {technologies.map((technology) => (
          <Tech name={technology.name} image={technology.image} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
