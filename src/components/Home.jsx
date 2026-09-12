
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slide2 from "/assets/slide2.jpeg";
import slide3 from "/assets/slide3.jpeg";
import slide4 from "/assets/slide4.jpeg";
import slide1 from "/assets/slide1.jpg";
import SpecialOffer from "./Specialoffer";
import unisex from "/assets/uni.jpeg";
import mens from "/assets/mens.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const images = [slide2, slide3, slide4];

  const [currimage, setcurrimage] = useState(0);

  // HERO SLIDER
  useEffect(() => {
    const Interval = setInterval(() => {
      setcurrimage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(Interval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="hero-section">

        {/* Background Images */}
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${
                index === currimage ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          ))}

          <div className="hero-overlay"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-title">
          <h1>
            Discover Your Signature
            <br />
            Scent With AuraMart
          </h1>

          <p className="des">
            Elevate Your Everyday
            <br />
            Explore premium fragrances
            <br />
            crafted for every mood
            <br />
            and every occasion.
          </p>

          <div className="buttons">
            <button
              id="shop"
              type="button"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>

            <button
              id="explore"
              type="button"
              onClick={() => navigate("/shop")}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container">

        {/* ================= CATEGORIES ================= */}
        <div className="categories">

          <h1 id="aaa">Shop by Category</h1>

          <p>
            Discover fragrances made to match your signature style
          </p>

          <div className="boxes">

            {/* MEN'S PERFUMES */}
            <div style={{backgroundImage:`url(${mens})`}}
              className="box"
              id="box1"
              onClick={() =>
                navigate("/category/:men")
              }
            >
              <div className="overlay1">
                <h3>Men's Perfumes</h3>
              </div>
            </div>

            {/* WOMEN'S PERFUMES */}
            <div
              className="box"
              id="box2"
              onClick={() =>
                navigate("/category/:women")
              }
            >
              <div className="overlay2">
                <h3>Women's Perfumes</h3>
              </div>
            </div>

            {/* UNISEX FRAGRANCES */}
            <div
              style={{backgroundImage:`url(${unisex})`}}
              className="box"
              id="box3"
              onClick={() =>
                navigate("/category/:unisex")
              }
            >
              <div className="overlay3">
                <h3>Unisex Fragrances</h3>
              </div>
            </div>

            {/* OUD COLLECTION */}
            <div
              className="box"
              id="box4"
              onClick={() =>
                navigate("/category/:oud")
              }
            >
              <div className="overlay4">
                <h3>Oud Collection</h3>
              </div>
            </div>

          </div>
        </div>

        {/* ================= SPECIAL OFFER ================= */}
        <SpecialOffer />

        {/* ================= TRUST BADGES ================= */}
        <div className="badges">

          {/* FAST SHIPPING */}
          <div className="badge">
            <i className="fa-solid fa-truck-fast"></i>

            <p>
              <b>Fast Shipping</b>
            </p>
          </div>

          {/* SECURE PAYMENT */}
          <div className="badge">
            <i className="fa-solid fa-building-lock"></i>

            <p>
              <b>
                Secure
                <br />
                Payment
              </b>
            </p>
          </div>

          {/* CUSTOMER SUPPORT */}
          <div className="badge">
            <i className="fa-solid fa-phone"></i>

            <p>
              <b>24/7 Support</b>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;