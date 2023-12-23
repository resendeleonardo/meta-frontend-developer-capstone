import React from "react";
import { TruckIcon } from "@heroicons/react/24/solid";

type CardProps = {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
};

const Card = ({ imageUrl, title, price, description }: CardProps) => {
  return (
    <>
      <div className="text-black text-2xl bg-gray-200 rounded-t-2xl md:h-[29rem]">
        <div className="flex flex-col md:h-[29rem]">
          <div
            style={{ backgroundImage: `url(${imageUrl})`}} 
            className="rounded-t-2xl bg-cover h-48"
          ></div>
          <div className="flex flex-col gap-6 p-4 lg:pb-0">
            <div className="flex flex-row items-center justify-between">
              <h2 className="font-semibold text-xl">{title}</h2>
              <p className="text-red-400 font-semibold text-base">{price}</p>
            </div>
            <div>
              <p className="text-base">{description}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-auto px-4 pb-4">
            <button className="text-base font-bold">Order a delivery</button>
            <TruckIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
