import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faqs = [
  {
    question: "Why do you need my documents while registration?",
    answer:
      "We are regulated by Financial Conduct Authority in the UK. It is our legal binding to verify your identity as a UK resident. ",
  },
  {
    question: "Will I get notifications about Transfer status?",
    answer:
      "We send email notifications to keep you informed. You can even view the transfer status by Signing in to your account.",
  },
  {
    question: "How can I cancel my transfer??",
    answer:
      "Please call us or email us at earliest possible if you want to cancel your transfer. Transfer paid out to the recipient cannot be cancelled. If you have paid for your transfer and the transfer is not processed yet, then please contact us by phone and we will make necessary arrangements for refunds. We may charge you a small fee as handling/service charge and refund you the balance amount.",
  },
  {
    question: "How can I pay for my transfer?",
    answer:
      "Bank Transfer to our business account and payments made by using credit or debit cards. Bank Transfer is the recommended and preferred method of payment. There may be restrictions on credit and debit card payment as well as there may be a fee charged on top.",
  },
  {
    question: "How can I pay for my transfer?",
    answer:
      "Bank Transfer to our business account and payments made by using credit or debit cards. Bank Transfer is the recommended and preferred method of payment. There may be restrictions on credit and debit card payment as well as there may be a fee charged on top.",
  },
  {
    question: "How can I pay for my transfer?",
    answer:
      "Bank Transfer to our business account and payments made by using credit or debit cards. Bank Transfer is the recommended and preferred method of payment. There may be restrictions on credit and debit card payment as well as there may be a fee charged on top.",
  },
  {
    question: "How can I pay for my transfer?",
    answer:
      "Bank Transfer to our business account and payments made by using credit or debit cards. Bank Transfer is the recommended and preferred method of payment. There may be restrictions on credit and debit card payment as well as there may be a fee charged on top.",
  },
  {
    question: "How can I pay for my transfer?",
    answer:
      "Bank Transfer to our business account and payments made by using credit or debit cards. Bank Transfer is the recommended and preferred method of payment. There may be restrictions on credit and debit card payment as well as there may be a fee charged on top.",
  },
];

export default function Questionsperson() {
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
        <button className="mt-2 text-white bg-mustard hover:bg-hovermustard hover:text-mustard font-bold py-2 px-4 rounded-3xl transition-all duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
}
