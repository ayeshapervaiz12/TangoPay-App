import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillAlipaySquare, AiTwotoneStar } from "react-icons/ai";
import Receivemoney from "../receivemoney";
import Questions from "../receivemoney/faq";

const Firstsection = () => {
  return (
    <>
      <div className="container mx-auto p-14 bg-mustard">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h1 className="text-3xl font-bold mt-6">Send Money to Togo</h1>
            <p className="items-center mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
              odio dolores sit ipsum ipsam itaque consequuntur laboriosam nihil
              eaque tenetur magni unde, fugiat beatae aut aliquam iste corporis
              placeat.
            </p>
            <div className="flex mt-6 text-white ">
              <IoLogoYoutube className="mt-1 mr-3 rounded-full" />
              <p> how it works</p>
            </div>
            <div className="flex mt-6 text-white">
              <AiTwotoneStar className="mt-1" />
              <AiTwotoneStar className="mt-1" />
              <AiTwotoneStar className="mt-1" />
              <AiTwotoneStar className="mt-1" />
              <AiTwotoneStar className="mt-1" />
              <AiTwotoneStar className="mt-1" />
              <p className="text-gray-500 mr-3">Base on 100+ reviews across</p>
              <img
                src="../../images/trustpilot.png"
                alt="trustpilot"
                className="w-16 h-7 mr-3 "
              />
              <img
                src="../../images/google.png"
                alt="google"
                className="w-16 h-7 mr-3"
              />
            </div>
          </div>{" "}
          <section className="ml-20">
            <div class="container mx-auto p-4">
              <div class="max-w-sm overflow-hidden bg-white rounded-2xl">
                <div class="p-4">
                  <div class="mb-4">
                    <label
                      for="dropdown1"
                      class="block text-gray-700 font-semibold mb-2"
                    >
                      Send to money
                    </label>
                    <div class="relative inline-block w-full text-gray-700">
                      <select
                        id="dropdown1"
                        class="appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      >
                        <option value="">Select Country</option>
                        <option value="">TOGO</option>
                        <option value="option1">Nigeria</option>
                        <option value="option2">Senegal</option>
                        <option value="option3">Rawanda</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <label
                      for="dropdown2"
                      class="block text-gray-700 font-semibold mb-2"
                    >
                      You send
                    </label>
                    <div class="relative inline-block w-full text-gray-700">
                      <select
                        id="dropdown2"
                        class="appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      >
                        <option value="">0.00</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      for="dropdown2"
                      class="block text-gray-700 font-semibold mb-2"
                    >
                      They get
                    </label>
                    <div class="relative inline-block w-full text-gray-700">
                      <select
                        id="dropdown2"
                        class="appearance-none w-full bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      >
                        <option value="">0.00</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          class="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-gray-500">
                      <p>free</p>
                      <p>No fees for first 3 months</p>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <p>Rate</p>
                      <p>-</p>
                    </div>
                    <div className="flex justify-between ">
                      <h1>Total</h1>
                      <h1>-</h1>
                    </div>
                  </div>

                  <button class=" w-full mt-6  bg-mustard text-white font-semibold py-2 px-4 rounded-2xl">
                    Enabled
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Receivemoney />
      <Questions />
      <div className="text-center text-gray-500">
        <p>Didn’t find your answer here? Just send us a message</p>
        <button className="mt-2 text-white bg-mustard hover:bg-hovermustard hover:text-white font-bold py-2 px-4 rounded-3xl transition-all duration-300">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Firstsection;
