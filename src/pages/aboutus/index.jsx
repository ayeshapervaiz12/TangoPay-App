import React from "react";
import styles from "../../styles/index.module.css";

const aboutus = () => {
  return (
    <div>
      <div className=" container mx-auto p-14 bg-mustard">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-3xl font-bold mt-32">TangoPay</h1>

            <p className="items-center mt-6">
              TangoPay is a digital Payment Service Provider, with the aim of
              bringing an outdated "brick and mortar" concept of money
              remittance to the digital age.
            </p>
          </div>
          <div>
            <img
              className="w-[451px] h-[437px] ml-2"
              src="../../images/global.png"
              alt="global"
            />
          </div>
        </div>
        <div className="grid items-center overflow-hidden p-[250px] pr-10 pl-0 pb-0">
          <div className="m-auto relative w-full grid items-center">
            <div className="flex flex-wrap justify-center md:justify-start lg:justify-between">
              <div className="border bg-lightyellow p-4 rounded-lg text-center m-3 ">
                <button>
                  <img
                    src="../../images/frame1.png"
                    alt="flag"
                    className="hover:scale-110"
                  />
                </button>
              </div>
              <div className="border bg-lightyellow p-4 rounded-lg text-center m-3">
                <button>
                  <img
                    src="../../images/frame2.png"
                    alt="flag"
                    className=" hover:scale-110"
                  />
                </button>
              </div>
              <div className="border bg-lightyellow p-4 rounded-lg text-center m-3">
                <button>
                  <img
                    src="../../images/frame3.png"
                    alt="flag"
                    className=" hover:scale-110"
                  />
                </button>
              </div>

              <div className="border bg-lightyellow p-4 rounded-lg text-center m-3">
                <button>
                  <img
                    src="../../images/frame4.png"
                    alt="flag"
                    className=" hover:scale-110"
                  />
                </button>
              </div>
              <div className="border bg-lightyellow p-4 rounded-lg text-center m-3">
                <button>
                  <img
                    src="../../images/frame5.png"
                    alt="flag"
                    className=" hover:scale-110"
                  />
                </button>
              </div>
              <div className="border bg-lightyellow p-4 rounded-lg text-center m-3">
                <button>
                  <img
                    src="../../images/frame6.png"
                    alt="flag"
                    className=" hover:scale-110"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinckshade  container mx-auto text-center p-3 ">
        <h3 className="text-white font-semibold leading-9">
          {" "}
          Welcome to TangoPay:{" "}
          <span className="text-shadedyellow font-semibold leading-9">
            Revolutionising
          </span>{" "}
          Money Remittance for the Digital Age!
        </h3>
      </div>
      <div className="container mx-auto p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h2 className="text-3xl font-bold leading-8">About Us</h2>
            <p className="text-left mt-6">
              TangoPay is an <b> Authorized Payment Institution (API)</b>{" "}
              regulated by the Financial Conduct Authority (FCA) under the
              Payment Services Regulation 2017 <b>(FCA License #572127)</b> . .
              Additionally, we are registered with HM Revenue & Customs (HMRC)
              as a Money Services Business <b>(HMRC Reg. #XNML00000156204)</b> ,
              ensuring compliance with Money Laundering Regulations.
              <br />
              <br />
              Our passion lies in transforming the way immigrants send money
              globally. We believe outdated brick-and-mortar concepts no longer
              serve your needs in today's fast-paced digital world. That's why
              we offer a comprehensive suite of innovative products and
              services, empowering you to enjoy fast, secure, and convenient
              money transfers.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="card bg-lightgray rounded-xl p-4 m-4">
              <img
                src="../../images/icon1.png"
                alt="Image 1"
                className="card-image mx-auto "
              />
              <h1 className="font-medium leading-6 rounded-xl text-center">
                Inclusivity
              </h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="card bg-lightgray p-4 m-4">
                <img
                  src="../../images/icon-2.png"
                  alt="Image 2"
                  className="card-image mx-auto "
                />
                <h1 className="text-center font-medium leading-6">
                  Regulatory <br />
                  compliance
                </h1>
              </div>
              <div className="card bg-lightgray rounded-xl text-center p-4 m-4">
                <img
                  src="../../images/icon3.png"
                  alt="Image 3"
                  className="card-image mx-auto "
                />
                <h1 className="text-center font-medium leading-6 ">
                  Digital <br />
                  Transformation
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-2">
              <div className="card bg-lightgray rounded-xl p-6 m-4">
                <img
                  src="../../images/icon4.png"
                  alt="Image 2"
                  className="card-image mx-auto "
                />
                <h1 className="text-center font-medium leading-6">
                  Reliability
                </h1>
              </div>
              <div className="card bg-lightgray rounded-xl text-center p-6 m-4">
                <img
                  src="../../images/icon5.png"
                  alt="Image 3"
                  className="card-image mx-auto "
                />
                <h1 className="text-center font-medium leading-6 ">Secuity</h1>
              </div>
            </div>
            <div className="card bg-lightgray rounded-xl p-6 m-4">
              <img
                src="../../images/icon6.png"
                alt="Image 1"
                className="card-image mx-auto "
              />
              <h1 className="font-medium leading-6 text-center">Convenience</h1>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-8">Our Mission</h2>
            <p className="text-left mt-6">
              With TangoPay, you have the freedom to choose the transfer method
              that suits you best. Our platform provides unparalleled
              flexibility, whether it's Cash Pickup, Direct to Bank, or Mobile
              Money. Seamlessly switch between modes and tailor your experience
              to meet your unique requirements.
              <br />
              At TangoPay, your peace of mind is our top priority. We adhere to
              industry standards and regulatory requirements, ensuring your
              transactions' security, reliability, and confidentiality. Rest
              assured that your hard-earned funds will be handled with the
              utmost care and transmitted safely to your loved ones or business
              partners.
              <br />
              Under the visionary leadership of Mr Basir Sangerwal, our team of
              dedicated professionals brings extensive experience in the
              remittance industry. Our unwavering commitment to excellence sets
              us apart as we strive to exceed your expectations. With TangoPay,
              your satisfaction is our driving force.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h2 className="text-3xl font-bold leading-8">Our Vision</h2>
            <p className="text-left mt-6">
              We firmly believe in the transformative power of financial
              services. TangoPay is more than just a remittance platform; we
              catalyse financial inclusion. By forging strategic partnerships
              and conducting forward-thinking research, we introduce new
              services that cater to emerging needs and contribute to the
              well-being of our customers and the communities we serve.
              <br />
              <br />
              Embark on an exhilarating journey with TangoPay as we redefine the
              landscape of money remittance in the digital era. Experience the
              convenience, speed, and security that TangoPay offers, empowering
              you to participate confidently in the global economy. Together,
              let's pave the way to a brighter future where financial services
              are accessible to all, and impact lives worldwide.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="card bg-lightgray rounded-xl p-4 m-4">
              <img
                src="../../images/icon8.png"
                alt="Image 1"
                className="card-image mx-auto "
              />
              <h1 className="font-medium leading-6 text-center">Inovation</h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="card bg-lightgray rounded-xl p-4 m-4">
                <img
                  src="../../images/icon9.png"
                  alt="Image 2"
                  className="card-image mx-auto "
                />
                <h1 className="text-center font-medium leading-6">Team Play</h1>
              </div>
              <div className="card bg-lightgray rounded-xl text-center p-4 m-4">
                <img
                  src="../../images/icon8.png"
                  alt="Image 3"
                  className="card-image mx-auto "
                />
                <h1 className="text-center font-medium leading-6 ">
                  Aspiration
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
