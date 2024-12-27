"use client";
import Image from "next/image";
import IntroImg from "../assets/tyu.png";
import IntroImg2 from "../assets/Img2.png";
import { FiAnchor, FiPlus } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import CallToAction from "../common/CallToAction";
import CardImg1 from "../assets/cardim1.png";
import CardImg2 from "../assets/cardim2.png";
import CardImg3 from "../assets/cardim3.png";
import SolarPlay from "../assets/solar_play-broken.png";
import SolarBox from "../assets/solar_box-outline.png";
import HugeIcon from "../assets/hugeicons_bulb.png";

const Service = () => {
    const cardsData = [
        {
            title: "UX/UI Design",
            description: "Crafting user-friendly, visually stunning experiences for web and mobile platforms",
            icon: CardImg1.src,
        },
        {
            title: "Web Development",
            description: "Building responsive, high-performance websites tailored to your unique business needs",
            icon: CardImg2,
        },
        {
            title: "Social Marketing",
            description: "Driving engagement and growth through targeted social media campaigns",
            icon: CardImg3,
        },
        {
            title: "Digital Strategy",
            description: "Designing data-driven plans to maximize your digital presence and impact.",
            icon: SolarPlay,
        },
        {
            title: "Branding & Visual Identity",
            description: "Creating cohesive, memorable branding that reflects your story and values",
            icon: SolarBox,
        },
        {
            title: "Creative Advertising",
            description: "Unleashing innovative strategies to captivate audiences and elevate your brand",
            icon: HugeIcon,
        },
    ];

    return (
        <div className="bg-gray-800 text-white min-h-screen overflow-hidden">
            {/* Header Section */}
            {/* <header
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${IntroImg.src})` }}
            >
                
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold font-poppins">
                        What we Offer
                    </h1>
                    <p className="mt-4 text-base md:text-lg font-lato">
                        Empowering your brand with expert digital marketing, <br />
                        SEO, UX/UI design, and innovative app and website <br />
                        development solutions.
                    </p>
                </div>
            </header> */}

            {/* Cards Section */}
            <section className="bg-black text-white flex flex-col items-center text-center">
                {/* Subtitle */}
                <h4 className="text-lime-custom font-montserrat font-bold text-xs tracking-wide mb-2">
                    What We Offer
                </h4>

                {/* Main Title */}
                <h2 className="text-4xl sm:text-5xl font-bold font-montserrat leading-tight">
                    Discover Our Expert Service
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl">
                    Explore our range of tailored digital solutions, designed to elevate your brand,
                    boost engagement, and deliver measurable results for your business.
                </p>
            </section>
            <div className="bg-black text-white py-36 px-36">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-4">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left p-6 border border-lime-400 rounded-3xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            {/* Icon */}
                            <div className="flex justify-center w-full mb-4 mt-6">
                                <div className="w-16 h-16">
                                    <Image src={card.icon} alt={card.title} width={75} height={75} />
                                </div>
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                            {/* Description */}
                            <p className="mt-2 text-gray-400">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            {/* <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                    
                    <div className="text-center md:text-left max-w-lg space-y-6">
                        <div className="bg-green-500 text-sm font-semibold px-4 py-2 rounded-md mb-6 inline-block">
                            Project
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium leading-tight">
                            Showcasing Our Completed <br /> Projects
                        </h2>
                        <p className="text-gray-400">
                            See how our innovative strategies and dedicated team make your
                            brand stand out in the digital landscape.
                        </p>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-center">
                                <FiPlus className="text-2xl text-lime-400" />
                                <span className="ml-4 text-gray-400">Dedicated Team</span>
                            </li>
                            <li className="flex items-center">
                                <FiPlus className="text-2xl text-lime-400" />
                                <span className="ml-4 text-gray-400">Tailored Solution</span>
                            </li>
                            <li className="flex items-center">
                                <FiPlus className="text-2xl text-lime-400" />
                                <span className="ml-4 text-gray-400">Comprehensive Service</span>
                            </li>
                        </ul>
                        <button className="bg-lime-400 text-black px-6 py-2 rounded-md mt-6 hover:bg-lime-500 transition-colors duration-200">
                            View all projects <FiAnchor />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative w-full h-64">
                            <Image
                                src={IntroImg}
                                alt="Project 1"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-64">
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
            </div> */}

        </div>
    );
};

export default Service;
