import yamada from "./assets/yamada-no-bg.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-11/12 md:w-1/2 m-auto h-screen flex flex-col justify-center items-center">
      <h1 className="font-medium text-4xl md:text-7xl mb-4">
        Marcos Baravalle
      </h1>
      <h2 className="text-2xl">Frontend software engineer</h2>
      <div className="mt-8 relative h-48 w-48 rounded-full overflow-hidden border-2 border-black">
        <Image src={yamada} alt="Yamada-kun" fill priority />
      </div>
    </div>
  );
};

export default Hero;
