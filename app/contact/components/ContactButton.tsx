import Link from "next/link";

interface Props {
  color: string;
  link: string;
  title: string;
}

interface ColorVariants {
  [key: string]: string;
}

const colorVariants: ColorVariants = {
  blue: "bg-blue-200 border-blue-400 hover:bg-blue-300",
  slate: "bg-slate-200 border-slate-400 hover:bg-slate-300",
  purple: "bg-purple-200 border-purple-400 hover:bg-purple-300",
  green: "bg-green-200 border-green-400 hover:bg-green-300",
};

const ContactButton = ({ color, link, title }: Props) => {
  return (
    <Link href={link} target="_blank">
      <div
        className={`${colorVariants[color]} transition-colors border-2 rounded-md w-52 md:w-48 py-2 text-center`}
      >
        -&gt; {title}
      </div>
    </Link>
  );
};

export default ContactButton;
