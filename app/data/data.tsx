import { StaticImageData } from "next/image";
import vibecommerceImage from "./assets/vibecommerce.webp";
import nephilimImage from "./assets/nephilim.webp";
import cryptoinsightImage from "./assets/cryptoinsight.webp";
import weatherappImage from "./assets/weatherapp.webp";

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  githubLink: string;
}

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
    title: "Nephilim Official Page",
    description:
      "Explore the electrifying world of Nephilim, your local music sensation. Dive into their music, events, and exclusive content, all in one place. Stay up-to-date with Nephilim's latest music releases, concert dates, and behind-the-scenes insights, all delivered in real-time. Also discover and shop for unique band merchandise through our integrated store. Show your love for Nephilim with the latest gear.",
    image: nephilimImage,
    link: "https://quantumvflux.github.io/nephilim-official-page/",
    githubLink: "https://github.com/quantumvflux/nephilim-official-page",
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
      "Explore the world's weather conditions with WeatherWeb, your trusted source for up-to-the-minute forecasts and meteorological insights. Discover accurate weather information from locations around the globe, all at your fingertips. Whether you're planning a local outing or an international adventure, WeatherWeb has you covered.",
    image: weatherappImage,
    link: "https://quantumvflux.github.io/react-weather-app/",
    githubLink: "https://github.com/quantumvflux/react-weather-app",
  },
];
