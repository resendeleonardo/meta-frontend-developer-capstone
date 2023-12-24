import React from "react";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import CallToAction from "../HomePage/CallToAction";

const Reservation = () => {
  return (
    <>
      {/* Example -- Will be changed later!! */}
      <div className="h-[650px] bg-primary-color pt-12 px-5 sm:px-20 2xl:px-72">
        <h2 className="text-base">How many diners?</h2>
        <div className="grid grid-cols-2 mt-4">
          <div className="flex flex-row gap-5">
            <p className="text-2xl leading-5">2 people</p>
            <div className="flex flex-row gap-2">
              <MinusCircleIcon className="h-6 w-6 cursor-pointer mt-auto" />
              <PlusCircleIcon className="h-6 w-6 cursor-pointer mt-auto" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-base">Time</h2>
          <div className="flex flex-row mt-4 gap-5">
            <p className="text-2xl p-1 outline rounded-xl cursor-pointer hover:bg-gray-500">
              18:00
            </p>
            <p className="text-2xl p-1 outline rounded-xl cursor-pointer hover:bg-gray-500">
              19:00
            </p>
            <p className="text-2xl p-1 outline rounded-xl cursor-pointer hover:bg-gray-500">
              20:00
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-base">Reservation Date</h2>
          <div className="flex flex-row mt-4 gap-5">
            <p className="text-2xl">Fri, 29 Dec</p>
            <p className="text-secondary-color text-base font-semibold cursor-pointer leading-9">
              PICK DATE
            </p>
          </div>
        </div>
        <div className="mt-10">
          <CallToAction to="/" text="Book Table" />
        </div>
      </div>
    </>
  );
};

export default Reservation;
