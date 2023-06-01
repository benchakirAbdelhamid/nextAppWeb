import React from "react";
import "../styles/homePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardFast, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faPlaystation, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/destination.css";


const Home = () => {
  return (
    <section className="parent_content">
        <h2>Latest on the barber <br/> shops Listing</h2>
    <div class="paent_card">
        <div class="card">
            <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
            </span>
            <div class="content_card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180" alt=""/>
                <b>Essaouira crooming </b>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="card">
        <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
            </span>
                        <div class="content_card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180" alt=""/>
                <b>Essaouira crooming </b>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="card">
        <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
            </span>
            <div class="content_card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180" alt=""/>
                <b>Essaouira crooming </b>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div class="card">
        <span class="icon">
            <FontAwesomeIcon icon={faHeart} />
            </span>
            <div class="content_card">
                <img src="https://tse1.mm.bing.net/th?id=OIP.jOzrlxoucDIIGrONc3MwdwHaFX&pid=Api&P=0&h=180" alt=""/>
                <b>Essaouira crooming </b>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
</section>
  );
};

export default Home;
