import React from "react";
import styles from "../../styles/index.module.css";
import { LuFolderHeart } from "react-icons/lu";

const Receivemoney = () => {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-center text-3xl font-bold">
          How to Recieved Money in Togo
        </h1>
        <div className="flex justify-center mt-6">
          <p className="text-center">
            with our secure online money transfer services.Select Mobile money
            for a hassle-free delivery of the money to your family members
            living in Togo.
          </p>
        </div>
      </div>

      <section className="mt-6">
        <div className="container px-5 py-24 mx-auto ">
          <div className=" flex justify-center flex-wrap -m-4">
            <div className="p-4 lg:w-2/5">
              <div className="h-full bg-lightgray bg-opacity-75 px-8 pt-16 pb-20 rounded-lg overflow-hidden text-center relative">
                <div class="flex justify-center items-center">
                  <div class=" relative rounded-full w-36 h-36 bg-lightmustard">
                    <div className="absolute inset-y-11 right-11 flex items-center pointer-events-none ">
                      <LuFolderHeart className="w-10 h-10 text-mustard" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h1 className="items-baseline text-left sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Mobile Money
                  </h1>
                  <p className="text-xs font-medium text-lightblack text-left">
                    Send money to Togo via Mobile Money transfers and enjoy a
                    quick and convenient way to transfer funds. Our Mobile Money
                    transfer service provides a seamless experience, allowing
                    you to send money to your beneficiary Mobile Money with just
                    a few taps on your phone..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-6 flex justify-around px-5 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6">
          <div className="mx-20 mt-6 ">
            <h2 className="font-bold text-2xl leading-10 text-lightblack">
              Payout Partner in Togo
            </h2>
            <p className="font-normal text-base text-lightblack">
              TangoPay’s Mobile Money partner in Togo — Zeepay.
            </p>
          </div>
          <div className="">
            <div
              className={`max-w-sm mx-20 md:space-x-6 bg-lightgray overflow-hidden ${styles.image}`}
            >
              <div className="p-4 flex justify-center">
                <img src="../../images/zeepay.png" alt="zeepay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 p-12 flex justify-around bg-mustard w-3/4 rounded-3xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-20 mt-6 md:items-cent">
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
              className="absolute top-14 -rotate-12 transform -translate-y-1/2 hidden md:block"
              src="../../images/mobile.png"
              alt="mobile"
            />
            <img
              className="absolute top-28 left-32 rotate-12 transform -translate-y-1/2 hidden md:block"
              src="../../images/mobile.png"
              alt="mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Receivemoney;
