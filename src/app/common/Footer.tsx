import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lime-custom text-black py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left pb-8">
        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-black hover:text-gray-800">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4 font-lato">Quick Link</h3>
          <ul className="-mt-2">
            <li>
              <a href="/" className="font-lato">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="font-lato">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="font-lato">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/blogs" className="font-lato">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="font-lato">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Top Services */}
        <div>
          <h3 className="font-bold mb-4 font-lato">Top Services</h3>
          <ul className="-mt-2">
            <li>
              <a href="/" className="font-lato">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="font-lato">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="font-lato">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/blogs" className="font-lato">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="font-lato">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold mb-4">Contacts</h3>
          <ul>
            <li>
              <a href="tel:+447854123690" className="font-lato">
                {/* <FontAwesomeIcon icon={faPhone} className="mr-2" /> */}
                +44 7854 123690
              </a>
            </li>
            <li>
              <a href="mailto:infoprism@gmail.com" className="font-lato">
                {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> */}
                infoprism@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-4 border-t border-black mx-20" />
      <p className="text-center text-9px">
        copyright © 2024 managed by Prism digital studio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
