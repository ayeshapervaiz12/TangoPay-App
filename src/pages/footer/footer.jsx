import React from "react";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="mt-6 text-gray-600 body-font cursor-pointer">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="../../images/logo.jfif" alt="logo" />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold  text-gray-500 tracking-widest text-sm mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-mustard">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-mustard">Career</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-mustard">News</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-mustard">Partners</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-500 tracking-widest text-sm mb-3">
                More
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-mustard">
                    BIC/Swift Code
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-mustard">Branches</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-mustard">FAQs</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-500 tracking-widest text-sm mb-3">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-mustard">Contact Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-mustard">Help</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-500 tracking-widest text-sm mb-3">
                Social Media
              </h2>

              <nav className=" flex gap-3 text-2xl text list-none">
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <TiSocialLinkedinCircular />
                </li>
                <li>
                  <AiFillInstagram />
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm justify-center">
              Copyright © 2023 TangoPay. All Rights Reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <p>Terms and Conditions</p>
              <a className="ml-3 text-gray-500">Privacy Policy</a>
              <a className="ml-3 text-gray-500">Complainst Policy</a>
            </span>
          </div>
        </div>
        <div>
          <div className="border-b border-outline"></div>
        </div>
        <div className="text-center mt-6 my-6">
          <p className="text-xs font-medium text-gray-500">
            Elizabeth House, 2nd Floor, 54-58 High Street, Edgware, Middlesex,
            HA8 7EJ
          </p>
          <p className="text-xs font-medium text-gray-500 ">
            Tangopay Ltd is also Licensed and regulated by HMRC as a Money
            Services Business [Registration No. XNML00000156204].
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
