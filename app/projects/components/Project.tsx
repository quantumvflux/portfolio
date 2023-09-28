import Image, { StaticImageData } from "next/image";
import LinksSection from "./LinksSection";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
}

const Project = ({ image, title, description, link, githubLink }: Props) => {
  return (
    <div className="mb-4">
      <h3 className="font-medium">&gt; {title}</h3>

      <div className="h-48 w-auto md:w-96 mb-2 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      <p>{description}</p>
      <LinksSection link={link} github={githubLink} />
    </div>
  );
};

export default Project;
