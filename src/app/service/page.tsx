
"use client";
import Image from "next/image";
import IntroImg from "../assets/tyu.png";
import IntroImg2 from "../assets/Img2.png";
import IntroImg3 from "../assets/Img3.png";
import { FiAnchor, FiPlus } from 'react-icons/fi';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Card from "../components/Card1"
import IC1 from '../assets/ic1.png'
import CardImg1 from '../assets/cardim1.png';
import CardImg2 from '../assets/cardim2.png';
import CardImg3 from '../assets/cardim3.png';
import SolarPlay from '../assets/solar_play-broken.png';
import SolarBox from '../assets/solar_box-outline.png';
import HugeIcon from '../assets/hugeicons_bulb.png';

const Service = () => {


    const cardsData = [
        {
            title: "UX/UI Design",
            description: "Crafting user-friendly, visually stunning experiences for web and mobile platforms",
            icon: CardImg1,
        },
        {
            title: "Web Development",
            description: "Building responsive, high-perform-ance websites tailored to your unique business needs",
            icon: CardImg2,
        },
        {
            title: "App Development",
            description: "Driving engagement and growth through targeted social media campaigns",
            icon: CardImg3,
        },
        {
            title: "Digital Marketing",
            description: "Designing data-driven plans to maximize your digital presence and impact.",
            icon: SolarPlay,
        },
        {
            title: "Digital Marketing",
            description: "Creating cohesive, memorable branding that reflects your story and values",
            icon: SolarBox,
        },
        {
            title: "Digital Marketing",
            description: "Unleashing innovative strategies to captivate audiences and elevate your brand",
            icon: HugeIcon,
        },
    ];
    return (
        <div className="bg-gray-800 text-white min-h-screen overflow-hidden">
            <header
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${IntroImg.src})` }} // Correct syntax for Next.js
            >
                {/* Overlay for background image */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Content on top of the background image */}
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold font-poppins">
                        What we Offer
                    </h1>
                    <p className="mt-4 text-base md:text-lg font-lato">
                        Empowering your brand with expert digital marketing,
                        <br />
                        SEO, UX/UI design, and innovative app and website
                        <br />
                        development solutions.
                    </p>
                </div>
            </header>
            <div className="bg-black text-white p-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-16  justify-center">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            img={card.icon}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-evenly space-y-10 md:space-y-0">
                    {/* Left Content */}
                    <div className="text-center md:text-left max-w-lg space-y-6 ml-6">
                        <div className="bg-green-500 text-sm font-semibold font-montserrat text-lime-custom px-4 py-2 rounded-md mb-6 inline-block">
                            Project
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium font-readex leading-tight">
                            Showcasing Our Completed <br /> Projects
                        </h2>
                        <p className="font-lato tracking-wider text-gray-400">
                            See how our innovative strategies and dedicated team make your brand stand out in the digital landscape.
                        </p>
                        <ul className="space-y-8 mt-4">
                            <li className="flex items-center">
                                <FiPlus className="text-2xl text-lime-custom" />
                                <span className="ml-5 text-gray-400">Dedicated Team</span>
                            </li>
                            <li className="flex items-center">
                                <FiPlus className="text-2xl text-lime-custom" />
                                <span className="ml-5 text-gray-400">Tailored Solution</span>
                            </li>
                            <li className="flex items-center">
                                <FiPlus className="text-2xl text-lime-custom" />
                                <span className="ml-5 text-gray-400">Comprehensive Service</span>
                            </li>
                        </ul>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-md mt-6 hover:bg-green-600 transition-colors duration-200">
                            View all projects <FiAnchor />
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative w-full h-96">
                            <Image
                                src={IntroImg}
                                alt="Project 1"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-96">
                            <Image
                                src={IntroImg2}
                                alt="Project 2"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-16">
                <div className="bg-gradient-to-r from-green-500 to-black p-10 rounded-lg">
                    <div className="text-center text-white">
                        <h2 className="text-2xl font-bold mb-4">Let's Create Something Great Together</h2>
                        <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur. Nisl cursus nullam dignissim integer.</p>
                        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service