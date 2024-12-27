import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
    img: string,
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ img, title, description }) => {
    return (
        <div className="bg-black border-2 border-lime-500 rounded-2xl p-6 transition w-[350px] mx-auto flex flex-col justify-between shadow-md hover:shadow-lg">
            <div className="flex flex-col items-center gap-6 p-1 mb-4 mt-4">
                <Image src={img} alt="Description" width={55} height={55} />
                <text className="text-white text-2xl font-bold">{title}</text>
                <p className="text-white mt-2 text-lg">{description}</p>
            </div>

        </div>
    );
};

export default Card;
