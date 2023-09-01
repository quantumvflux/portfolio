import Link from "next/link";
import Image from "next/image";
import githubIcon from "./assets/github.png";
import linkIcon from "./assets/link.png";

interface Props {
  github: string;
  link: string;
}

const LinksSection = ({ github, link }: Props) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <Link href={link} target="_blank">
        <Image src={linkIcon} alt="Project Link" />
      </Link>
      <Link href={github} target="_blank">
        <Image src={githubIcon} alt="Github Link" />
      </Link>
    </div>
  );
};

export default LinksSection;
