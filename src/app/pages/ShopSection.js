import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const ShopSection = () => {
  return (
    <div className="  py-24 sm:py-32">
    <div className="  mx-auto max-w-7xl px-6 lg:px-8">
      <div className=" bg-gray-100 mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900">
            Try To open Your <br /> Shpe With us
          </h3>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consect etu
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none leading-6 ">
              <button
            type="submit"
            className="flex-none  p-6 rounded-full  bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Open Your Shope
          </button>
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
        </div>
        <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl  py-10 text-center  ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-300">
                  BANNER
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ShopSection;
