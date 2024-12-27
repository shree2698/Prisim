"use client";

import Image from "next/image";
import Img from "../assets/PortfolioImg.png";
import ContactImg from "../assets/ContactImg.png"

const Contact: React.FC = () => {

  return (
    <div className="text-white min-h-screen overflow-hidden">
      {/* Header Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Img.src})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold font-poppins">Get in Touch</h1>
          <p className="mt-4 text-base md:text-lg font-lato">
            Let’s connect and bring your vision to life today!
          </p>
        </div>
      </header>

      <div className="flex justify-center items-center min-h-screen bg-black py-28">
        <div className="bg-gradient-to-tr from-lime-custom/25 via-[rgba(255,255,255,0.1)] to-lime-custom/25 text-white rounded-3xl px-20 py-16 shadow-lg flex flex-col lg:flex-row items-center max-w-5xl mx-auto">
          {/* Form Section */}
          <div className="lg:w-1/2 w-full lg:pr-8 mb-6 lg:mb-0 ">
            <div className="lg:w-4/5 w-full lg:pr-8 mb-6 lg:mb-0">
              <h2 className="text-xl font-bold mb-4 font-montserrat">
                Let's Connect and <br />
                Create Together
              </h2>
              <form className="space-y-3">
                <div className="flex gap-4">
                  <input
                    type="text"
                    style={{ backgroundColor: 'rgba(86, 86, 86, 0.8)'}}
                    placeholder="First Name"
                    className="w-full p-3 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-lime-500 text-lime-custom"
                  />
                  <input
                    type="text"
                    style={{ backgroundColor: 'rgba(86, 86, 86, 0.8)'}}
                    placeholder="Last Name"
                    className="w-full p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 text-lime-custom"
                  />
                </div>
                <input
                  type="email"
                  style={{ backgroundColor: 'rgba(86, 86, 86, 0.8)'}}
                  placeholder="Email"
                  className="w-full p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 text-lime-custom"
                />
                <input
                  type="tel"
                  style={{ backgroundColor: 'rgba(86, 86, 86, 0.8)'}}
                  placeholder="Phone No."
                  className="w-full p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 text-lime-custom"
                />
                <textarea
                  placeholder="Message"
                  style={{ backgroundColor: 'rgba(86, 86, 86, 0.8)'}}
                  rows={4}
                  className="w-full p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 text-lime-custom"
                ></textarea>
                {/* Centered Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-24 py-2 bg-lime-500 text-black text-sm font-semibold rounded-md hover:bg-lime-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/5" />
          </div>



          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={ContactImg.src}
                alt="Contact"
                className="object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
