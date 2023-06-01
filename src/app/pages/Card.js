import React from "react";
import "../styles/featured.css";

const Card = () => {
  return (
    <div className="parent_content">
      <h2> Guides & Tips</h2>
      <section>
        <div class="parent_card">
          <div class="card">
            <div class="top_card"></div>
            <div class="footer_card">
              <b>Choose the right Berbar shope!</b>
              <p>Economy</p>
            </div>
          </div>
          <div class="card">
            <div class="top_card"></div>
            <div class="footer_card">
              <b>Best envirenment for rental</b>
              <p>Lifestyle</p>
            </div>
          </div>
          <div class="card">
            <div class="top_card"></div>
            <div class="footer_card">
              <b>Boys Hostel Apartment</b>
              <p>Property</p>
            </div>
          </div>
        </div>
        <div class="btn">
          {/* <button >View All Blogs</button> */}
          <button
            type="submit"
            className="flex-none mt-5 p-4 rounded-full  bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All Blogs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
