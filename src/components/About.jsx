import React from "react";
import { useNavigate } from "react-router-dom";
import slide2 from "/assets/slide2.jpeg";
import slide3 from "/assets/slide3.jpeg";
import slide4 from "/assets/slide4.jpeg";
import slide1 from "/assets/slide1.jpg";
import unisex from "/assets/uni.avif";
import mens from "/assets/mens.avif";
const About = () => {
  const navigate = useNavigate();

  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT SCENTAURA</span>

          <h1>
            Fragrance That
            <span> Defines You</span>
          </h1>

          <p>
            Discover premium fragrances carefully selected to help you
            express your personality, mood, and unique sense of style.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story container">
        <div className="about-story-image">
          <img
            src={slide4}
            alt="Premium perfume collection"
          />
        </div>

        <div className="about-story-content">
          <span className="about-small-title">OUR STORY</span>

          <h2>
            Your Signature Scent,
            <br />
            Your <span>Story</span>
          </h2>

          <p>
            At AuraMart, we believe fragrance is more than just a scent.
            It is an expression of identity, confidence, and memories.
          </p>

          <p>
            Our collection brings together elegant perfumes, captivating
            oud fragrances, refreshing body mists, and carefully curated
            gift sets for every personality and occasion.
          </p>

          <p>
            From timeless classics to modern compositions, we make it easy
            to discover a fragrance that feels uniquely yours.
          </p>

          <button
            className="about-shop-btn"
            onClick={() => navigate("/shop")}
          >
            Explore Our Collection
          </button>
        </div>
      </section>

      {/* Why AuraMart */}
      <section className="about-values">
        <div className="container">
          <div className="about-section-heading">
            <span>WHY AURAMART</span>
            <h2>More Than Just a Fragrance</h2>
            <p>
              Everything we do is inspired by quality, elegance, and the
              experience of finding your perfect scent.
            </p>
          </div>

          <div className="about-value-grid">

            <div className="about-value-card">
              <div className="about-icon">
                <i className="fa-solid fa-gem"></i>
              </div>

              <h3>Premium Selection</h3>

              <p>
                Carefully selected fragrances with distinctive and
                memorable scent profiles.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-icon">
                <i className="fa-solid fa-spray-can-sparkles"></i>
              </div>

              <h3>For Every Personality</h3>

              <p>
                From bold oud to soft florals, discover scents designed
                for different moods and personalities.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-icon">
                <i className="fa-solid fa-heart"></i>
              </div>

              <h3>Chosen With Care</h3>

              <p>
                We focus on creating a beautiful fragrance-shopping
                experience from discovery to delivery.
              </p>
            </div>

            <div className="about-value-card">
              <div className="about-icon">
                <i className="fa-solid fa-truck-fast"></i>
              </div>

              <h3>Fast & Secure</h3>

              <p>
                Enjoy a smooth shopping experience with secure payment
                and reliable delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="about-categories container">

        <div className="about-section-heading">
          <span>DISCOVER YOUR SCENT</span>
          <h2>Something For Everyone</h2>
          <p>
            Explore our fragrance collections and find the scent that
            matches your style.
          </p>
        </div>

        <div className="about-category-grid">

          <div
          style={{backgroundImage:`url(${slide1})`}}
            className="about-category-card"
            onClick={() => navigate("/category/men")}
          >
            <div className="about-category-overlay">
              <span>01</span>
              <h3>Men's Perfumes</h3>
              <p>Bold. Confident. Distinctive.</p>
            </div>
          </div>

          <div
          style={{backgroundImage:`url(${slide2})`}}
            className="about-category-card"
            onClick={() => navigate("/category/women")}
          >
            <div className="about-category-overlay">
              <span>02</span>
              <h3>Women's Perfumes</h3>
              <p>Elegant. Soft. Captivating.</p>
            </div>
          </div>

          <div
          style={{backgroundImage:`url(${unisex})`}}
            className="about-category-card"
            onClick={() => navigate("/category/unisex")}
          >
            <div className="about-category-overlay">
              <span>03</span>
              <h3>Unisex Fragrances</h3>
              <p>Modern. Versatile. Timeless.</p>
            </div>
          </div>

          <div
          style={{backgroundImage:`url(${mens})`}}
            className="about-category-card"
            onClick={() => navigate("/category/oud")}
          >
            <div className="about-category-overlay">
              <span>04</span>
              <h3>Oud Collection</h3>
              <p>Rich. Warm. Luxurious.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-content">
          <span>FIND YOUR SIGNATURE SCENT</span>

          <h2>
            Let Your Fragrance
            <br />
            <strong>Speak For You.</strong>
          </h2>

          <p>
            Explore AuraMart's collection and discover a scent made
            for your story.
          </p>

          <button onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      </section>

    </main>
  );
};

export default About;