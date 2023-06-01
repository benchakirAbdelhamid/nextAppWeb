"use client";
import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/section.css";
const includedFeatures = ["Private forum access"];
import "../styles/destination.css";

const CardPage = () => {
  return (
    <section className="parent_content">
      <div className="title_centent">
        <h2>
          Listed Barber <br /> Shops nearby
        </h2>
        <h3>
          <FontAwesomeIcon className="icon_maps" icon={faMapLocationDot} />
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {" "}
            <span>Show On Map</span>{" "}
          </button>
        </h3>
      </div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26381.766432542834!2d-6.6060288!3d34.2556672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1685578677370!5m2!1sen!2sma"
                style={{ border: "0", width: "100%", height: "80vh" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
       
          </div>
        </div>
      </div>

      <div class="paent_card">
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="content_card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180"
              alt=""
            />
            <b>Essaouira crooming </b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPage;
