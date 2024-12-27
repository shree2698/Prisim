"use client";

import { useState } from "react";
import Image from "next/image";
import Img from "../assets/BlogImg.png";
import CardImg from "../assets/BlogImg1.jpg";
import CallToAction from "../common/CallToAction";

interface Card {
  title: string;
  img: string;
  linkText: string;
  content: string;
}

const Blogs: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards: Card[] = [
    {
      title: "Boost your brand with innovative digital marketing strategies",
      img: CardImg.src,
      linkText: "Read more",
      content:
        "Discover how to leverage cutting-edge digital marketing techniques to enhance your brand's presence and connect with your audience more effectively.",
    },
    {
      title: "Boost your brand with innovative digital marketing strategies",
      img: CardImg.src,
      linkText: "Read more",
      content:
        "Unlock the secrets to building a robust digital strategy that drives traffic, engagement, and conversions for your business.",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen overflow-hidden">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Img.src})` }}
      >
        {/* Overlay for the background image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Header Content */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold font-poppins">
            What we Share
          </h1>
          <p className="mt-4 text-base md:text-lg font-lato">
            Stay informed with expert insights, trends, and tips to
            <br />
            elevate your digital strategies and achieve business
            <br />
            success.
          </p>
        </div>
      </header>

      {/* Cards Section */}
      <div className="flex flex-row flex-wrap justify-start gap-6 px-6 md:pt-16 md:px-32 bg-black">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-lime-custom shadow-lg overflow-hidden max-w-sm flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_30%] transition-all duration-300 ${
              expandedCard === index ? "max-h-full" : "max-h-96"
            }`}
          >
            {/* Card Image */}
            <div className="relative w-full h-56">
              <Image
                src={card.img}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl p-4"
              />
            </div>

            {/* Card Content */}
            <div className="px-6">
              <h3 className="text-white text-sm mb-5 mt-4">{card.title}</h3>
              {expandedCard === index && (
                <p className="text-gray-300 text-sm mb-3">{card.content}</p>
              )}
              <p
                onClick={() => toggleExpand(index)}
                className="text-lime-custom text-sm font-semibold cursor-pointer hover:underline mb-3"
              >
                {expandedCard === index ? "Show less" : card.linkText}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CallToAction />
    </div>
  );
};

export default Blogs;
