import React from "react";
import Card from "../components/CardDestination/Card";
import "../styles/destination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  return (
    <section className="parent_content">
      <h2>
        Top Rated <br /> Barber Shops
      </h2>
      <div class="paent_card">
        <div class="card">
          <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <div class="group_star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
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
          <div class="group_star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
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
          <div class="group_star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
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
          <div class="group_star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
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

export default Destination;
