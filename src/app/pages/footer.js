import React from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    // <div>
    //     <section>
    //         <article>
    //             <ul>
    //                 <li>Logo</li>
    //                 <li>Facebook</li>
    //                 <li>Twitter</li>
    //                 <li>Youtube</li>
    //                 <li>Instagram</li>
    //             </ul>
    //             <ul>
    //                 <li>Logo</li>
    //                 <li>Facebook</li>
    //                 <li>Twitter</li>
    //                 <li>Youtube</li>
    //                 <li>Instagram</li>
    //             </ul>
    //             <ul>
    //                 <li>Logo</li>
    //                 <li>Facebook</li>
    //                 <li>Twitter</li>
    //                 <li>Youtube</li>
    //                 <li>Instagram</li>
    //             </ul>
    //             <ul>
    //                 <li>Logo</li>
    //                 <li>Facebook</li>
    //                 <li>Twitter</li>
    //                 <li>Youtube</li>
    //                 <li>Instagram</li>
    //             </ul>
    //             <ul>
    //                 <li>Logo</li>
    //                 <li>Facebook</li>
    //                 <li>Twitter</li>
    //                 <li>Youtube</li>
    //                 <li>Instagram</li>
    //             </ul>
    //         </article>
    //     </section>
    // </div>
    <div className="relative isolate overflow-hidden bg-gray-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className=" lg:max-w-md ">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              LOGO
            </h2>
            <p className="mt-4 leading-8 ">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore minim nostrud
              adipisicing velit quis ad minim nostrud .
            </p>
            <div className="mt-4 flex max-w-md  gap-x-4 text-center">
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                PlayStore
              </button>
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                AppleStore
              </button>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-x-2 gap-y-1 sm:grid-cols-3 lg:pt-2">
            <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold">COMPANY</dt>
              <dd className="mt-2  ">About Us</dd>
              <dd className="mt-2  ">Legal information</dd>
              <dd className="mt-2  ">Contact Us</dd>
              <dd className="mt-2  ">Blogs</dd>
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold">HELP CENTER</dt>
              <dd className="mt-2  ">Find a Property</dd>
              <dd className="mt-2  ">How To Host?</dd>
              <dd className="mt-2  ">Why Us?</dd>
              <dd className="mt-2  ">FaQs</dd>
              <dd className="mt-2  ">Rental Guides</dd>
              
            </div>
            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold">CONTACT INFO</dt>
              <dd className="mt-2  ">phone : 021451255</dd>
              <dd className="mt-2 ">Email : hamid@gmail.com</dd>
              <div class="flex items-center mt-4">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 ml-2">
                  <HandRaisedIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 ml-2">
                  <HandRaisedIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 ml-2">
                  <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 ml-2">
                  <HandRaisedIcon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Footer;
