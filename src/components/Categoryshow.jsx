
import React, { useEffect, useState, useContext } from "react";

import { Menu, X, Filter } from "lucide-react";

import { useParams, useNavigate } from "react-router-dom";

import SpinnerPage from "./SpinnerPage";

import cartContext from "../contextApi/cart/cartContext";

import productsData from "../data/products.json";

const Categoryshow = () => {
  const { catname } = useParams();

  const navigate = useNavigate();

  const [catproducts, setcatproducts] = useState([]);
  const [selectedbrand, setselectedbrand] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [Pricefilter, setPricefilter] = useState(0);

  const cleanedCatName = catname?.startsWith(":")
    ? catname.slice(1)
    : catname;

  const context = useContext(cartContext);

  const {
    cart,
    increment,
    decrement,
    removecart,
    loading,
    setloading,
    addtoCart,
  } = context;

  // FETCH CATEGORY PRODUCTS FROM LOCAL JSON
  useEffect(() => {
    if (!cleanedCatName) {
      return;
    }

    setloading(true);

    try {
      const filteredProducts = productsData.filter(
        (item) => item.category === cleanedCatName
      );

      setcatproducts(filteredProducts);

      console.log("Category:", cleanedCatName);
      console.log("Category products:", filteredProducts);
    } catch (error) {
      console.log("Category Error:", error.message);
      setcatproducts([]);
    } finally {
      setloading(false);
    }
  }, [cleanedCatName, setloading]);

  // UNIQUE BRANDS
  const uniquebrands = [
    ...new Set(
      catproducts
        ? catproducts.map((item) => item.brand).filter((brand) => brand)
        : []
    ),
  ];

  // CHECKBOX CHECK / UNCHECK LOGIC
  const brandchange = (brand) => {
    if (selectedbrand.includes(brand)) {
      setselectedbrand(
        selectedbrand.filter((item) => item !== brand)
      );
    } else {
      setselectedbrand([...selectedbrand, brand]);
    }
  };

  // FILTER PRODUCTS ACCORDING TO SELECTED BRAND
  const filterdProducts =
    selectedbrand.length === 0
      ? catproducts
      : catproducts.filter((item) =>
          selectedbrand.includes(item.brand)
        );

  // FILTER PRODUCTS ACCORDING TO PRICE
  const filteredbyprice =
    Pricefilter > 0
      ? filterdProducts.filter(
          (item) => Number(item.price) < Pricefilter
        )
      : filterdProducts;

  // CAPITALIZE CATEGORY NAME
  const capitalize = (word = "") => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // RATING STARS
  const renderStars = (rating) => {
    const stars = [];
    const rates = Math.round(Number(rating) || 0);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <p
          key={`star_${i}`}
          style={{
            color: i <= rates ? "orange" : "#E5E7EB",
            fontSize: "18px",
          }}
        >
          ★
        </p>
      );
    }

    return stars;
  };

  // MOBILE FILTER
  const toggleFilter = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="body">

        {/* CATEGORY HEADING */}
        <h1 id="head">{capitalize(cleanedCatName)}</h1>

        {/* MOBILE FILTER BUTTON */}
        <button
          className="filter-toggle-btn"
          onClick={toggleFilter}
        >
          {isOpen ? <X size={20} /> : <Filter size={20} />}
          <span>Filter</span>
        </button>

        <div className="main">

          {/* FILTER SIDEBAR */}
          <div className={`filters ${isOpen ? "active" : ""}`}>

            <h2 id="h2">Filter By</h2>

            {/* BRAND FILTER */}
            {uniquebrands.length > 0 && (
              <h3 id="h2">Brand</h3>
            )}

            {uniquebrands.length > 0 &&
              uniquebrands.map((brand) => {
                return (
                  <div className="filter" key={brand}>
                    <input
                      type="checkbox"
                      value={brand}
                      checked={selectedbrand.includes(brand)}
                      onChange={() => brandchange(brand)}
                    />

                    <p id="pf">{brand}</p>
                  </div>
                );
              })}

            {/* PRICE FILTER */}
            <h3 id="h2">Price</h3>

            <div className="ranges">

              
              <div className="range">
                <input
                  type="checkbox"
                  value={2000}
                  checked={Pricefilter === 2000}
                  onChange={(e) => {
                    e.target.checked
                      ? setPricefilter(2000)
                      : setPricefilter(0);
                  }}
                />

                <p id="pf">Under Rs.2000</p>
              </div>

              {/* UNDER $100 */}
              <div className="range">
                <input
                  type="checkbox"
                  value={3000}
                  checked={Pricefilter === 3000}
                  onChange={(e) => {
                    e.target.checked
                      ? setPricefilter(3000)
                      : setPricefilter(0);
                  }}
                />

                <p id="pf">Under Rs.3000</p>
              </div>

              {/* UNDER $500 */}
              <div className="range">
                <input
                  type="checkbox"
                  value={5000}
                  checked={Pricefilter === 5000}
                  onChange={(e) => {
                    e.target.checked
                      ? setPricefilter(5000)
                      : setPricefilter(0);
                  }}
                />

                <p id="pf">Under Rs.5000</p>
              </div>

            </div>
          </div>

          {/* PRODUCTS */}
          <div className="catproducts">

            {loading && <SpinnerPage />}

            {!loading &&
              filteredbyprice.map((item) => {

                const isAdded = cart.some(
                  (cartitem) => cartitem.id === item.id
                );

                return (
                  <div className="cat" key={item.id}>

                    {/* PRODUCT IMAGE */}
                    <img
                      id="catimg"
                      src={item.images?.[0]}
                      alt={item.title}
                      onClick={() => {
                        navigate(`/DetailsPage/${item.id}`);
                      }}
                    />

                    {/* PRODUCT NAME */}
                    <h5 id="name">{item.title}</h5>

                    {/* RATING */}
                    <div id="rating">
                      {Number(item.rating).toFixed(1)}
                      {renderStars(item.rating)}
                    </div>

                    {/* PRICE */}
                    <p id="price">
                      <b><b>Rs. {Math.round(item.price).toLocaleString()}</b></b>
                    </p>

                    {/* DISCOUNT */}
                    <p id="discount">
                      {Math.round(item.discountPercentage)}% Off
                    </p>

                    {/* ADD TO CART */}
                    <div id="add">
                      <button
                        type="button"
                        id="cartbtn1"
                        disabled={isAdded}
                        onClick={() => addtoCart(item)}
                      >
                        {isAdded
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>

                    {/* QUANTITY */}
                    <div id="qq">

                      <button
                        type="button"
                        id="inc"
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>

                      <p id="count">
                        {cart.find(
                          (cartitem) =>
                            cartitem.id === item.id
                        )?.quantity || 0}
                      </p>

                      <button
                        type="button"
                        id="dec"
                        onClick={() => decrement(item.id)}
                      >
                        -
                      </button>

                    </div>

                    {/* REMOVE */}
                    <button
                      type="button"
                      id="remove"
                      onClick={() => removecart(item.id)}
                    >
                      Remove
                    </button>

                  </div>
                );
              })}

          </div>
        </div>
      </div>
    </>
  );
};

export default Categoryshow;

