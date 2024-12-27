import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="px-72 py-20 bg-gradient-to-tr from-lime-custom/25 via-[rgba(255,255,255,0.1)] to-lime-custom/25 p-10 rounded-3xl shadow-lg max-w-full text-center">
                {/* Heading */}
                <h2 className="text-white text-xl font-montserrat md:text-xl font-bold mb-4">
                    Let's Create Something Great Together
                </h2>
                {/* Description */}
                <p className="p-3 text-gray-400 text-xs md:text-sm mb-8">
                    Lorem ipsum dolor sit amet consectetur. Nisl cursus nullam <br />dignissim integer.
                </p>
                {/* Button */}
                <a href="/contact">
                <button className="px-6 py-4 bg-lime-custom text-black rounded-2xl font-montserrat text-sm font-bold shadow-[0px_0px_30px_5px_rgba(208,216,91,0.73)]">
                    Contact Us
                </button>
                </a>
            </div>
        </div>
    );
};

export default CallToAction;
