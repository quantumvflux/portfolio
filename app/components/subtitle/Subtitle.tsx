interface Props {
  text: string;
}

const Subtitle = ({ text }: Props) => {
  return <h2 className="text-3xl font-medium mb-4">{text}</h2>;
};

export default Subtitle;
