import React, { useState } from "react";
import Card from "./cards";
import SearchOption from "./searchoption";
import Questionshelp from "./helpfaqs";

const data = [
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img1.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img2.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img3.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img4.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img5.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img6.png",
  },
  {
    title: "Payments and limits",
    description:
      "Pay with bank, manual bank transfer, transaction limit and amount limit.",
    date: "21 Feb 2023 • 15:33",
    imageUrl: "../../images/img7.png",
  },
];

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? data : data.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div>
      <SearchOption />
      <div>
        <h1 className="text-3xl font-bold flex justify-center mt-20">
          Popular Topics
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {visibleItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                date={item.date}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
          <div className="mt-4 ">
            {showAll ? (
              <button
                onClick={toggleShowAll}
                className="text-mustard text-center items-center"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={toggleShowAll}
                className="text-mustard text-center items-center "
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </section>
      <Questionshelp />
    </div>
  );
};

export default Home;
