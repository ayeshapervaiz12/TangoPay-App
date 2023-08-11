import Link from "next/link";

import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className=" bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <img className="w-32" src="../../images/logo.jfif" alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-500 rounded-md outline-none focus:border-mustard focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <img
                      src="../../images/hamburger.png"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <img
                      src="../../images/hamburger.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="md:h-auto items-center justify-center md:flex">
                <li className="pb-6 text-lg text-black hover: py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-mustard  border-mustard  md:hover:text-mustard md:hover:bg-transparent">
                  <Link href="/person" onClick={() => setNavbar(!navbar)}>
                    Person
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black  hover: py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-mustard  border-mustard  md:hover:text-mustard md:hover:bg-transparent">
                  <Link href="/business" onClick={() => setNavbar(!navbar)}>
                    Business
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black  hover: py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-mustard  border-mustard  md:hover:text-mustard md:hover:bg-transparent">
                  <Link href="/aboutus" onClick={() => setNavbar(!navbar)}>
                    About us
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black  hover: py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-mustard  border-mustard  md:hover:text-mustard md:hover:bg-transparent">
                  <Link href="/referfriend" onClick={() => setNavbar(!navbar)}>
                    Refer a friend
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black  hover: py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-mustard  border-mustard  md:hover:text-mustard md:hover:bg-transparent">
                  <Link href="/help" onClick={() => setNavbar(!navbar)}>
                    help
                  </Link>
                </li>

                <div className="">
                  <div className="relative inline-block text-left pb-6 text-xl text-gray-500 py-2 px-6 md:text-center  border-b-2 md:border-b-0  hover:bg-mustard md:hover:text-black md:hover:bg-transparent">
                    <Link
                      href=""
                      onClick={() => setNavbar(!navbar)}
                      className="relative inline-block"
                    >
                      <select
                        id="dropdown"
                        className="appearance-none text-lg bg-white text-black px-4 py-2 w-28 rounded leading-tight hover:text-mustard md:px-6 md:border-b-0  hover:bg-mustard md:hover:text-black md:hover:bg-transparent"
                      >
                        <option value="" className="text-mustard">
                          {/* <img src="../../images/Germany.png" alt="pic" /> */}
                          English
                        </option>
                        <option value="option1" className="text-mustard">
                          GERMANY
                        </option>
                        <option value="option2" className="text-mustard">
                          ITALIAN
                        </option>
                        <option value="option3" className="text-mustard">
                          CHINESE(SIMPLIFIED)
                        </option>
                        <option value="option3" className="text-mustard">
                          CHINESE (TRADITIONAL)
                        </option>
                        <option value="option3" className="text-mustard">
                          FRENCH
                        </option>
                        <option value="option3" className="text-mustard">
                          POLISH
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-mustard">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12l-6-6h12l-6 6z" />
                        </svg>
                      </div>
                    </Link>
                  </div>

                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="bg-white text-lg text-mustard px-4 py-1 m-1 rounded-full border border-mustard hover:bg-mustard text-center md:border-b-0 md:hover:text-gray-500 md:hover:bg-transparent"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setNavbar(!navbar)}
                    className="bg-mustard text-white text-lg px-4 py-1 m-1 rounded-full "
                  >
                    Sign In
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
