
import React, { useEffect, useContext, useState } from "react";
import cartContext from "../contextApi/cart/cartContext";
import { useParams, useNavigate } from "react-router-dom";
import SpinnerPage from "./SpinnerPage";
import productsData from "../data/products.json";

const Search = () => {
  const navigate = useNavigate();
  const { fword } = useParams();

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

  const [products, setproducts] = useState([]);

  // Search products from local JSON
  const fetchsearch = () => {
    setloading(true);

    if (!fword) {
      setproducts([]);
      setloading(false);
      return;
    }

    try {
      const searchTerm = fword.toLowerCase().trim();

      const filteredProducts = productsData.filter((item) => {
        return (
          item.title?.toLowerCase().includes(searchTerm) ||
          item.description?.toLowerCase().includes(searchTerm) ||
          item.category?.toLowerCase().includes(searchTerm) ||
          item.brand?.toLowerCase().includes(searchTerm)
        );
      });

      console.log("Searching for:", fword);
      console.log("Search results:", filteredProducts);

      setproducts(filteredProducts);
    } catch (err) {
      console.log("Error searching products:", err);
      setproducts([]);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchsearch();
  }, [fword]);

  // Stars
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

  return (
    <>
      <div className="search-box">
        {loading ? (
          <SpinnerPage />
        ) : products.length > 0 ? (
          products.map((item) => {
            const isAdded = cart.some(
              (cartitem) => cartitem.id === item.id
            );

            return (
              <div className="search-item" key={item.id}>
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  onClick={() => {
                    navigate(`/DetailsPage/${item.id}`);
                  }}
                />

                <h5 id="name">{item.title}</h5>

                <div id="rating">
                  {Number(item.rating).toFixed(1)}
                  {renderStars(item.rating)}
                </div>

                <p id="price">
                  <b>Rs. {Math.round(item.price).toLocaleString()}</b>
                </p>

                <p id="discount">
                  {Math.round(item.discountPercentage)}% Off
                </p>

                <div id="add">
                  <button
                    type="button"
                    id="cartbtn1"
                    disabled={isAdded}
                    onClick={() => addtoCart(item)}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>

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
                      (cartitem) => cartitem.id === item.id
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

                <button
                  type="button"
                  id="remove"
                  onClick={() => removecart(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })
        ) : (
          <p
            style={{
              textAlign: "center",
              width: "100%",
              minHeight: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No products found
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
