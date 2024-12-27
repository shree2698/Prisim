"use client";
import Image from "next/image";
import IntroImg from "./assets/Img1.jpg";
import IntroImg2 from "./assets/Img2.png";
import IntroImg3 from "./assets/Img3.png";
import { FiPlus } from 'react-icons/fi';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Card from "./components/Card";
import IC1 from '../app/assets/ic1.png'
import CallToAction from "./common/CallToAction";
import Service from "./service/page"

const Home: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const cardsData = [
    {
      title: "UX/UI Design",
      description: "Our UX/UI Design services focus on creating intuitive user experiences.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description: "We build responsive and performant web applications for your business.",
      icon: "💻",
    },
    {
      title: "App Development",
      description: "Custom mobile app solutions tailored to your needs.",
      icon: "📱",
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your brand's online presence.",
      icon: "📈",
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your brand's online presence.",
      icon: "📈",
    },
    {
      title: "Digital Marketing",
      description: "Strategies to boost your brand's online presence.",
      icon: "📈",
    },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen overflow-hidden">
      <header
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${IntroImg.src})` }}
      >
        {/* Overlay for background image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content on top of the background image */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold font-poppins">
            Bringing Vision and Creativity to Every
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins mt-2">
            Digital Experience
          </h1>
          <p className="mt-4 text-base md:text-lg font-lato">
            Lorem ipsum dolor sit amet consectetur. Nisl cursus nullam dignissim integer.
            <br />
            Sagittis sem nec nibh condimentum sit. ipsum sit interdum tempor massa.
          </p>
        </div>

        {/* Carousel Div */}
        <div className="absolute bottom-6 left-0 w-full bg-lime-custom text-black py-3 -rotate-2 z-20 h-14">
          <div className="flex animate-marquee space-x-4">
            {Array(3)
              .fill([
                "Graphic & Printing",
                "App Design",
                "Web Design",
                "Social Media Marketing",
              ])
              .flat()
              .map((item, index) => (
                <span
                  key={index}
                  className="font-bold text-lg whitespace-nowrap px-4 font-montserrat"
                >
                  {item} +
                </span>
              ))}
          </div>
        </div>
      </header>
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly space-y-10 md:space-y-0">
          {/* Left Hexagonal Image */}
          <div className="relative w-lg h-lg pl-16">
            <Image
              src={IntroImg2}
              alt="Hexagon"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left max-w-lg space-y-6 pl-5">
            <h4 className="text-green-500 text-lg font-bold font-montserrat text-lime-custom">Who We Are</h4>
            <h2 className="text-3xl md:text-4xl font-medium font-readex">
              Expert Digital Solution for <br />Modern Business
            </h2>
            <p className="font-lato tracking-wider">
              We're a team of creative thinkers and digital experts, crafting tailored strategies
              to help businesses thrive. Your success is our mission, and innovation is at the heart
              of everything we do.
            </p>
            <button className="px-5 py-3 border-lime-custom border-solid border-2 bg-black text-lime-custom rounded-lg font-montserrat text-xs font-bold transition">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly space-y-10 md:space-y-0">
          {/* Left Hexagonal Image */}
          <div className="text-center md:text-left max-w-lg space-y-6 ml-6">
            <h4 className="text-green-500 text-lg font-bold font-montserrat text-lime-custom">Why Us</h4>
            <h2 className="text-3xl md:text-4xl font-medium font-readex">
              As Your Partner for Digital <br />Success
            </h2>
            <p className="font-lato tracking-wider">
              See how our innovative strategies and dedicated team make your brand stand out in the digital landscape.
            </p>
            <ul className="space-y-8 mt-4">
              <li className="flex items-center">
                <FiPlus className="text-2xl text-lime-custom" />
                <span className="ml-5">Dedicated Team</span>
              </li>
              <li className="flex items-center">
                <FiPlus className="text-2xl text-lime-custom" />
                <span className="ml-5">Tailored Solution</span>
              </li>
              <li className="flex items-center">
                <FiPlus className="text-2xl text-lime-custom" />
                <span className="ml-5">Comprehensive Service</span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="relative w-lg h-lg pl-16">
            <Image
              src={IntroImg3}
              alt="Hexagon"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly space-y-10 md:space-y-0">
          
          <div className="text-center md:text-left max-w-lg space-y-6 px-32">
            <h4 className="text-green-500 text-base font-bold font-montserrat text-lime-custom">What We Offer</h4>
            <h2 className="text-3xl md:text-4xl font-medium font-readex">
              Discover Our Expert <br />Service
            </h2>
            <p className="font-lato tracking-wider">
              Explore our range of tailored digital solutions, designed to elevate your brand, boost engagement, and drive measurable results for your business
            </p>
            <button className="px-5 py-3 border-lime-custom border-solid border-2 bg-black text-lime-custom rounded-lg font-montserrat text-xs font-bold transition">
              View More
            </button>
          </div>

          
          <div className="flex flex-col items-center">
            <div  className="relative flex space-x-6 overflow-x-scroll scrollbar-hide w-full max-w-[80vw] whitespace-nowrap" ref={scrollRef}>
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  img={IC1}
                  description={card.description}
                />
              ))}
            </div>
            <div className="flex mt-4 px-10">
              <button
                onClick={scrollLeft}
                className="bg-transparent border-2 border-lime-custom p-3 m-4 shadow-lg text-lime-custom hover:bg-lime-custom hover:text-black transition"
                aria-label="Scroll Left"
              >
                &#8592;
              </button>
              <button
                onClick={scrollRight}
                className="bg-lime-custom border-2 border-lime-custom p-3  m-4 shadow-lg text-black hover:bg-transparent hover:text-lime-custom transition"
                aria-label="Scroll Right"
              >
                &#8594;
              </button>
            </div>

          </div>

        </div>
      </div> */}
      {/* <CallToAction /> */}
      <Service />
    </div>
  );
};

export default Home;
