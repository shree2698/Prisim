"use client";

import { useState } from "react";
import Image from "next/image";
import Img from "../assets/PortfolioImg.png";
import Img1 from '../assets/Portfolio1.jpg';
import Img2 from '../assets/Portfolio2.jpg';
import Img3 from '../assets/Portfolio3.png';
import Img4 from '../assets/Portfolio4.png';
import Img5 from '../assets/Portfolio5.jpg';
import Img6 from '../assets/Portfolio6.png';
import Img7 from '../assets/Portfolio7.jpg';
import CallToAction from "../common/CallToAction";

const categories = ["All", "Social Media Marketing", "UX/UI Design", "SEO", "Photography"];

const items = [
  { id: 1, category: "Social Media Marketing", img: Img1.src },
  { id: 2, category: "UX/UI Design", img: Img2.src },
  { id: 3, category: "SEO", img: Img3.src },
  { id: 4, category: "Photography", img: Img4.src },
  { id: 5, category: "Social Media Marketing", img: Img5.src },
  { id: 6, category: "UX/UI Design", img: Img6.src },
  { id: 7, category: "Photography", img: Img7.src },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All" ? items : items.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-gray-800 text-white min-h-screen overflow-hidden">
      {/* Header Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Img.src})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold font-poppins">What we Deliver</h1>
          <p className="mt-4 text-base md:text-lg font-lato">
            Transforming ideas into impactful digital solutions that
            <br />
            drive growth, enhance experiences, and elevate your
            <br />
            brand's success.
          </p>
        </div>
      </header>

      {/* Portfolio Section */}
      <div className="bg-black min-h-screen pt-20">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border-2 ${
                activeCategory === category
                  ? "bg-lime-custom text-black border-lime-custom"
                  : "text-lime-custom border-lime-custom hover:bg-lime-custom hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-28 py-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-2xl shadow-lg group size-auto">
              <Image
                src={item.img}
                alt={`Portfolio item for ${item.category}`}
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-semibold transition-all duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default Portfolio;
