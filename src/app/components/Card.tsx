import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
    img: string,
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ img, title, description }) => {
    return (
        <div
            className="bg-black border-t-2 border-r-2 border-lime-500 rounded-lg p-6 transition w-[350px] mx-auto flex flex-col justify-between shadow-md hover:shadow-lg"
        >
            {/* Icon Placeholder */}
            <div>
                <Image src={img} alt="Description" width={50} height={50}/>
            </div>
            {/* Card Content */}
            <div>
                <h3 className="text-white text-lg font-semibold text-left">{title}</h3>
                <p className="text-gray-400 mt-2 text-left text-sm">{description}</p>
                {/* Read More Link */}
                <a
                    href="#"
                    className="text-lime-500 mt-4 inline-block text-sm font-bold hover:underline text-center"
                >
                    Read more →
                </a>
            </div>

        </div>
    );
};

export default Card;
