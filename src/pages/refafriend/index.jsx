import React from "react";
import Questionsfriends from "./referfaq";

const refafriend = () => {
  return (
    <div>
      <div className=" container mx-auto p-14 bg-mustard">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-3xl font-bold mt-32">
              Refer a Friend to TangoPay <br />
              and Earn £10
            </h1>

            <p className="items-center mt-6">
              Get a £10 reward after your friends send at least £100 on their
              first transfer
            </p>
            <div className="mt-6 flex gap-2">
              <button className="inline-flex text-sm font-medium text-mustard bg-white py-3 px-3 focus:outline-none rounded-full">
                Sigh Up to Refer a Friend
              </button>
            </div>
          </div>
          <div>
            <img src="../../images/globalmobile.png" alt="mobile" />
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-bold title-font mb-4 text-gray-900">
              HOW ITS WORK
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full bg-lightgray">
                  <img
                    className="ml-2 mt-6"
                    src="../../images/message.png"
                    alt="message"
                  />
                  <h2 className="title-font font-medium text-lg text-black text-left ml-2">
                    Send your referral code
                  </h2>
                  <p className="mb-6 text-sm">
                    Share your referral code from the app by e-mail, WhatsApp or
                    social media.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full bg-lightgray">
                  <img
                    className="ml-2 mt-6"
                    src="../../images/tick.png"
                    alt="message"
                  />
                  <h2 className="title-font font-medium text-lg text-black text-left ml-2">
                    Your friends SignUp
                  </h2>
                  <p className="mb-6 text-sm text-left ml-2">
                    They must sign up using your code
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center ">
                <div className="w-full bg-lightgray">
                  <img
                    className="ml-2 mt-6"
                    src="../../images/icon.png"
                    alt="message"
                  />
                  <h2 className="title-font font-medium text-lg text-gray-900 text-left">
                    You get £10 in your wallet
                  </h2>

                  <p className="mb-6 text-left text-sm">
                    When they send £100 or more, you will receive your £10
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full bg-lightgray">
                  <img
                    className="ml-2 mt-6"
                    src="../../images/icon2.png"
                    alt="message"
                  />
                  <h2 className="title-font font-medium text-lg text-black text-left ml-2">
                    Invite even more friends
                  </h2>
                  <p className="mb-6 text-left ml-2 text-sm">
                    There are no limits on how many friends you can invite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <Questionsfriends />
    </div>
  );
};

export default refafriend;
