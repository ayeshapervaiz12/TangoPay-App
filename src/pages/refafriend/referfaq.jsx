import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faqs = [
  {
    question: "How do referrals work?",
    answer: (
      <ul className="list-disc ml-6">
        To refer friends, share your personal referral link from the TangoPay
        app or TangoPay.com.
        <li>
          After your friend signs up using your link and successfully completes
          their first transfer, you’ll receive a reward to use on your next
          transfer.
        </li>
        <li>
          There are no limits on the number of friends you can refer. You’ll
          receive a reward for every successful referral you make.
        </li>
        <li>
          Your friend must be a new Remitly customer who resides in the same
          country as you to be eligible for our referral program.
        </li>
      </ul>
    ),
  },

  {
    question: "How do I find my personal referral link and reward amount?",
    answer: (
      <ul className="list-disc ml-6">
        On the TangoPay app.
        <li>Sign in to the TangoPay app</li>
        <li>Select My TangoPay</li>
        <li>Select Invite Friends</li>
        <li>
          Choose how you want to share your referral link.(email, SMS,
          Messenger, or WhatsApp) On TangoPay.com: Sign in to your account in
          the top navigation.
        </li>
        On the TangoPay.com
        <li>Sign in to your account.</li>
        <li>Select Invite Friends in the top navigation</li>
        <li>Choose how you want to share your referral link.</li>
      </ul>
    ),
  },
  {
    question: "Will my friend get a referral reward?",
    answer:
      "Your friend will receive a special referral offer on their first transfer, which often includes a discount on their first transfer. Referral offers vary, including depending on the country to which your friend sends their first transfer and may change from time to time.",
  },
  {
    question: "What if I do not get my referral reward?",
    answer:
      "Please note that your friend must sign up for TangoPay using your referral link and successfully complete their first transfer in order for you to receive the referral reward. If you believe your friend signed up using your referral link and successfully completed their first transfer and your referral reward is not available, please contact us..",
  },
];

export default function Questionsfriends() {
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
