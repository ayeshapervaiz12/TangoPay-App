import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { AiTwotoneStar } from "react-icons/ai";
import Questionsperson from "./faqperson";
import styles from "../../styles/index.module.css";

const person = () => {
  return (
    <>
      <div className=" container mx-auto p-14 bg-mustard">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h1 className="text-3xl font-bold mt-6">
              Best Way to Transfer Money <br />
              WorldWide with TangoPay
            </h1>

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
          </div>
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
        <div className={styles.slider}>
          <div className={styles.myslider}>
            <div className={styles.slidetrack}>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/pakistan.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 PKG</b>
                  </p>
                </button>
              </div>

              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/pakistan.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 PKG</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/india.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 PKG</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/belgium.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 EUR</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/cameroon.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 XAF</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/australia.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 AUD</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/albania.png"
                    alt="flag"
                    className="w-8 h-6"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 ALL</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/bangladesh.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 BDT</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/bangladesh.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 BDT</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/france.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 EUR</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/Germany.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 EUR</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/china.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 CNY</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/maxicon.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 CNY</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/nepal.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 CNY</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/monaco.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 CNY</b>
                  </p>
                </button>
              </div>
              <div className={styles.myslide}>
                <button className="bg-white w-28 h-10 rounded-3xl relative">
                  <img
                    src="../../images/polish.png"
                    alt="flag"
                    className="w-8 h-6 rounded-full"
                  />
                  <p className="text-xs font-normal ml-8 absolute top-0">
                    1GBP <br />
                    <b>100.40 CNY</b>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-center text-3xl font-bold">Why choice TangoPay?</h1>
        <div className="flex justify-center mt-6">
          <p className="text-center">
            TangoPay is the easiest and faster way to make international money
            transfer.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-12 flex justify-around px-5 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <section className="p-12">
            <div className="container px-5  mx-auto ">
              <div className=" flex justify-center flex-wrap -m-4">
                <div className="p-4">
                  <div className="h-full bg-lightgray bg-opacity-75 px-8 pt-16 pb-20 rounded-lg overflow-hidden text-center relative">
                    <div class="flex justify-center items-center">
                      <div class=" relative w-[317px] h-[149px]">
                        <div className="absolute inset-y-2 right-11 flex justify-center pointer-events-none ">
                          <img src="../../images/secure.png" alt="secure" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h1 className="items-baseline text-left sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                        secure
                      </h1>
                      <p className="text-xs font-medium text-lightblack text-left">
                        We place the highest focus on our clients' safety. That
                        is why multiple tiers of protection are used to secure
                        your transactions when you send money home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            {" "}
            <div class="flex flex-col mb-10 lg:items-start items-center mt-12 w-full">
              <div class="grid grid-cols-1 md:grid-cols-2 bg-lightgray">
                <img src="../../images/sufixx.png" alt="sufixx" />
                <div className="flex-grow items-center">
                  <h2 className="font-medium text-sm">Fast</h2>
                  <p class="text-sm font-normal">
                    We assure on-time delivery, quick and instant payments.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center mt-12 w-full">
              <div class="grid grid-cols-1 md:grid-cols-2 bg-lightgray">
                <img src="../../images/nofees.png" alt="nofees" />
                <div className="flex-grow">
                  <h2 className="font-medium text-sm">No Fees</h2>
                  <p class="text-sm font-normal">
                    We charge no fee on your transactions for the first 3
                    months.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center mt-12 w-full">
              <div class="grid grid-cols-1 md:grid-cols-2 bg-lightgray">
                <img src="../../images/currency.png" alt="currency" />
                <div className="flex-grow">
                  <h2 className="font-medium text-sm">Wholesale Rates</h2>
                  <p class="text-sm font-normal text-left">
                    As a result of our wholesale rates, you can be confident
                    that we will provide market beating rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-center text-3xl font-bold leading-10">
          How to Send Your First Global Money Transfer
        </h2>
        <div className="flex justify-center mt-6">
          <p className="text-center">Send money in three simple steps</p>
        </div>
        <div className="container mx-auto p-12 flex justify-around px-5 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mx-20 mt-14">
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-mustard text-white mb-4 ">
                1
              </span>{" "}
              <h2 className="font-bold text-2xl leading-10 text-lightblack">
                Create an Account.
              </h2>
              <p className="font-normal text-base text-lightblack">
                Choose where your money needs to go and enter your details
              </p>
            </div>

            <div>
              <div className={`max-w-sm mx-auto overflow-hidden`}>
                <div className="p-4 flex justify-center">
                  <img src="../../images/circlemobile.png" alt="mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-12 flex justify-around px-5 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className={`max-w-sm mx-auto overflow-hidden`}>
                <div className="p-4 flex justify-center">
                  <img src="../../images/step2.png" alt="mobile" />
                </div>
              </div>
            </div>
            <div className="mx-20 mt-14">
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-mustard text-white mb-4 ">
                2
              </span>{" "}
              <h2 className="font-bold text-2xl leading-10 text-lightblack">
                Set up your transfer
              </h2>
              <p className="font-normal text-base text-lightblack">
                Enter the amount you wish to send,tell us who its's for andpick
                to delivery method
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-12 flex justify-around px-5 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mx-20 mt-14">
              <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-mustard text-white mb-4 ">
                3
              </span>{" "}
              <h2 className="font-bold text-2xl leading-10 text-lightblack">
                Pay
              </h2>
              <p className="font-normal text-base text-lightblack">
                Add your details and choose how you want to pay
              </p>
            </div>
            <div>
              <div className={`max-w-sm mx-auto overflow-hidden`}>
                <div className="p-4 flex justify-center">
                  <img src="../../images/step3.png" alt="mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 p-12 flex justify-around bg-mustard w-3/4 rounded-3xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex w-72">
            <img
              className="absolute top-14 -rotate-12 transform -translate-y-1/2"
              src="../../images/mobile.png"
              alt="mobile"
            />
            <img
              className="absolute top-28 left-32 rotate-12 transform -translate-y-1/2"
              src="../../images/mobile.png"
              alt="mobile"
            />
          </div>
          <div className="mx-20 mt-14 md:items-cent">
            <h2 className="font-bold text-2xl leading-10 text-lightblack">
              Refer a Friend to <br /> TangoPay and Earn £10
            </h2>
            <p className="font-normal text-base text-lightblack">
              Get a £10 reward after your friends send at least £100 on their
              first transfer
            </p>
            <div className="mt-6 flex gap-2">
              <button className="inline-flex text-sm font-medium text-mustard bg-white py-1 px-2 focus:outline-none rounded-full">
                Sigh Up to Refer a Friend
              </button>
              <button className="inline-flex text-center text-sm font-medium leading-4 text-white bg-transparent border border-white py-1 px-2 focus:outline-none rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-lightgray text-gray-500 body-font mt-6">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20 mt-6">
            <h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-black mb-4">
              Send money to over 60+ countries around the world
            </h1>
            <p class="text-base text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Our money transfer destinations
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class=" w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/pakistan.png" alt="pakistan" />
                  </span>
                  Pakistan
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/australia.png" alt="australia" />
                  </span>
                  Australia
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/bangladesh.png" alt="bangldesh" />
                  </span>
                  Bangladesh
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/belgium.png" alt="belgium" />
                  </span>
                  Belgium
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/bulgaria.png" alt="bulgaria" />
                  </span>
                  Bulgaria
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/cameroon.png" alt="cameroon" />
                  </span>
                  Cameroon
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/china.png" alt="china" />
                  </span>
                  China
                </a>
                <a>
                  <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/france.png" alt="france" />
                  </span>
                  France
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/Germany.png" alt="germany" />
                  </span>
                  Germany
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/india.png" alt="india" />
                  </span>
                  India
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/italy.png" alt="italy" />
                  </span>
                  Italy
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/polish.png" alt="polish" />
                  </span>
                  Polish
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/usa.png" alt="usa" />
                  </span>
                  USA
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/albania.png" alt="albania" />
                  </span>
                  Albania
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/finland.png" alt="finland" />
                  </span>
                  Finland
                </a>
              </nav>
            </div>
            <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/monaco.png" alt="monaco" />
                  </span>
                  Monaco
                </a>
                <a>
                  <span class=" w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/nepal.png" alt="nepal" />
                  </span>
                  Nepal
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/mexico.png" alt="mexico" />
                  </span>
                  Mexico
                </a>
                <a>
                  <span class=" w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/denmark.png" alt="denmark" />
                  </span>
                  Denmark
                </a>
                <a>
                  <span class="w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <img src="../../images/zambia.png" alt="zambia" />
                  </span>
                  Zambia
                </a>
              </nav>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-mustard border-0 py-2 px-8 focus:outline-none hover:bg-hovermustard rounded text-lg">
            See All
          </button>
        </div>
      </section>
      <div class="text-center mb-20 mt-6">
        <h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-black mb-4">
          What Our Client Say
        </h1>
        <p class="text-base text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Our 1,000 reviews on Trustpilot & Google
        </p>
      </div>
      <div className="container mx-auto mt-20 p-12 flex justify-around bg-mustard w-3/4 rounded-3xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-20 mt-14 md:items-cent">
            <h2 className="font-bold text-2xl leading-10 text-lightblack">
              Download Our App
            </h2>
            <p className="font-normal text-base text-lightblack">
              Download our app and send money anywhere, any time from your
              mobile device at your ease
            </p>
            <div className="mt-6 flex gap-4">
              <img src="../../images/playstore.png" alt="playstore" />
              <img src="../../images/appstore.png" alt="appstore" />
            </div>
          </div>
          <div className="relative flex w-72">
            <img
              className="absolute top-14 -rotate-12 transform -translate-y-1/2"
              src="../../images/mobile.png"
              alt="mobile"
            />
            <img
              className="absolute top-28 left-32 rotate-12 transform -translate-y-1/2"
              src="../../images/mobile.png"
              alt="mobile"
            />
          </div>
        </div>
      </div>
      <Questionsperson />
    </>
  );
};

export default person;
