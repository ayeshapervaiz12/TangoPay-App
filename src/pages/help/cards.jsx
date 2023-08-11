// components/Card.js
import React from "react";

const Card = ({ title, description, date, imageUrl }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-36 W-32 rounded overflow-hidden">
        <img
          alt="Card Image"
          className="object-center rounded-lg w-full h-full block"
          src={imageUrl}
          width={200}
          height={144}
        />
      </a>
      <div className="mt-4 bg-lightgray">
        <h3 className="text-black text-lg tracking-widest title-font mb-1">
          {title}
        </h3>
        <h2 className="text-gray-900 text-xs font-medium">{description}</h2>
        <p className="mt-1 text-gray-500 text-xs">{date}</p>
      </div>
    </div>
  );
};

export default Card;
