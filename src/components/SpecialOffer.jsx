
import React from "react";
import { useNavigate } from "react-router-dom";

const SpecialOffer = () => {
  const navigate = useNavigate();

  return (
    <section className="special-offer">
      <div className="offer-content">
        <span className="offer-tag">
          LIMITED TIME OFFER
        </span>

        <h2>
          Refresh Your Style. <span>Save More.</span>
        </h2>

        <p>
          Get up to <strong>20% OFF</strong> on selected
          fashion products. Don't miss out on our latest
          collection!
        </p>

        <button
          className="offer-btn"
          type="button"
          onClick={() => navigate("/shop")}
        >
          Shop Deals
        </button>
      </div>

      <div className="offer-discount">
        <span>UP TO</span>
        <strong>20%</strong>
        <small>OFF</small>
      </div>

      <div className="offer-circle circle-one"></div>
      <div className="offer-circle circle-two"></div>
    </section>
  );
};

export default SpecialOffer;

