import { StaticImageData } from "next/image";
import vibecommerceImage from "./assets/vibecommerce.webp";
import nephilimImage from "./assets/nephilim.webp";
import cryptoinsightImage from "./assets/cryptoinsight.webp";
import weatherappImage from "./assets/weatherapp.webp";
import amserviciosImage from "./assets/amservicios.webp";

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  githubLink: string;
}

export interface Job extends Omit<Project, "githubLink"> {}

export const job: Job[] = [
  {
    title: "AM Servicios",
    description:
      "Designed and developed a captivating landing page for AM Servicios that perfectly encapsulates the essence of their brand. Additionally, I spearheaded their digital marketing efforts across various social media platforms, including Instagram, Facebook, and LinkedIn. I conceptualized and brought to life a landing page that harmonized with AM Servicios' brand identity. This web presence serves as a virtual gateway to their services, leaving a lasting impression on visitors.",
    image: amserviciosImage,
    link: "https://vibecommerce.vercel.app/",
  },
  {
    title: "Nephilim Official Page",
    description:
      "I collaborated with the local band Nephilim to create a dynamic web presence that not only showcased their music but also included an e-commerce solution for their merchandise offerings. I was entrusted with the task of designing and developing a captivating website that would effectively represent Nephilim's unique musical identity. The website I crafted seamlessly integrated their branding, music, and a range of interactive elements to engage visitors and fans.",

    image: nephilimImage,
    link: "https://quantumvflux.github.io/nephilim-official-page/",
  },
];

export const data: Project[] = [
  {
    title: "VibeCommerce",
    description:
      "Discover the future of online shopping with VibeCommerce, your go-to destination for the latest trends and unbeatable deals. Browse through a vast selection of products, from fashion to electronics and more, all at your fingertips. With VibeCommerce, you're just a click away from your next favorite purchase. Join us on VibeCommerce today and redefine your online shopping experience. Get ready to explore, discover, and shop like never before!",
    image: vibecommerceImage,
    link: "https://vibecommerce.vercel.app/",
    githubLink: "https://github.com/quantumvflux/ecommerce",
  },

  {
    title: "CryptoInsight",
    description:
      "Join the CryptoInsight community today and take your cryptocurrency investments to the next level! Our platform provides real-time cryptocurrency updates, ensuring you never miss a market-moving event. Get instant access to the latest market data, trends, and insights to make informed investment decisions and explore comprehensive analysis tools to better understand cryptocurrency performance, historical data, and future projections.",
    image: cryptoinsightImage,
    link: "https://cryptoinsight.vercel.app/",
    githubLink: "https://github.com/quantumvflux/cryptoinsight",
  },
  {
    title: "Weather App",
    description:
      "Explore the world's weather conditions with Weather App, your trusted source for up-to-the-minute forecasts and meteorological insights. Discover accurate weather information from locations around the globe, all at your fingertips. Whether you're planning a local outing or an international adventure, Weather App has you covered.",
    image: weatherappImage,
    link: "https://quantumvflux.github.io/react-weather-app/",
    githubLink: "https://github.com/quantumvflux/react-weather-app",
  },
];
