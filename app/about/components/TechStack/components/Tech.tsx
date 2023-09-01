import { Technology } from "../services/importAssets";
import Image from "next/image";

const Tech = ({ name, image }: Technology) => {
  return (
    <div className="border-2 p-2 rounded-md bg-slate-800">
      <Image src={image} alt={name} loading="lazy" />
    </div>
  );
};

export default Tech;
