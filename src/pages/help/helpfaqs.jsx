import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faqs = [
  {
    question: "How safe is TangoPay?",
    answer:
      "You can open a business account quickly in about 10 minutes - just fill out a short form. We’ll need to review your business account application and start the on-boarding process. The on-boarding process can be quick, but will depend on the complexity of your company and the documents uploaded. ",
  },
  {
    question: "how do i sign up?",
    answer:
      "To open your business account, we’ll need to know:Your operating address confirmation A short description of what your business does and where (nature of business) How you intend to use your business account Proof and verification of your identity",
  },
  {
    question: "How do I send money online?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How much does TangoPay cost?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do i make a suggestion or compliant?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "what is refer a friend?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "24/7 customer services",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do i change the receiving country or my account?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How frequently we update rates?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Questionshelp() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleFaqs = showAll ? Faqs : Faqs.slice(0, 3);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-500">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-500">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-500">
            {visibleFaqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-500">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-mustard">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          {Faqs.length > 3 && (
            <div className="text-center mt-6">
              <button
                className="text-mustard font-bold"
                onClick={toggleShowAll}
              >
                {showAll ? "See Less" : "See All"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="text-center text-gray-500">
        <p>Didn’t find your answer here? Just send us a message</p>
        <button className="mt-2 text-white bg-mustard hover:bg-hovermustard hover:text-white font-bold py-2 px-4 rounded-3xl transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
