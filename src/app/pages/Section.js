import React from 'react';
import '../styles/section.css';
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]
  
const Section = () => {
    return (
        <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
         
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl  ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Discover More About <br/> Barber Shops</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                Lorem ipsum dolor sit amet consect etur  elit. Itaque amet indis perferendis blanditiis
                repellendus etur quidem assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-800">Ask A Question</h4>
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-800">Find A Barber Shope</h4>
              <div className="h-px flex-auto bg-gray-100 mt-5" />
              </div>
              <button
                type="submit"
                className="flex-none mt-5 p-4 rounded-full  bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Discover More
              </button>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-500 bg-opacity-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8 min-h-100 h-80 ">
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Section;
