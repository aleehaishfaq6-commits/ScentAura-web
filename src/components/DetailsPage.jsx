
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import cartContext from "../contextApi/cart/cartContext";
import SpinnerPage from "./SpinnerPage";
import productsData from "../data/products.json";

const DetailsPage = () => {
  const context = useContext(cartContext);

  const {
    cart,
    loading,
    setloading,
    addtoCart,
    increment,
    decrement,
  } = context;

  const { id } = useParams();
  const navigate = useNavigate();

  const [products, setproducts] = useState(null);
  const [Relevant, setRelevant] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  // Fetch product details from local JSON
  useEffect(() => {
    setloading(true);

    try {
      const product = productsData.find(
        (item) => item.id === Number(id)
      );

      setproducts(product || null);
      setSelectedImage(0);

      console.log("Product:", product);
    } catch (error) {
      console.log("Product Error:", error.message);
      setproducts(null);
    } finally {
      setloading(false);
    }
  }, [id, setloading]);

  // Fetch relevant products from local JSON
  useEffect(() => {
    if (!products?.category) {
      setRelevant([]);
      return;
    }

    try {
      const filtered = productsData
        .filter(
          (item) =>
            item.category === products.category &&
            item.id !== products.id
        )
        .slice(0, 6);

      setRelevant(filtered);
    } catch (error) {
      console.log("Relevant Products Error:", error.message);
      setRelevant([]);
    }
  }, [products]);

  // Rating stars
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

  // Product not found
  if (!loading && !products) {
    return (
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Product not found</p>
      </div>
    );
  }

  const isAdded =
    products &&
    cart.some((item) => item.id === products.id);

  return (
    <>
  {loading && <SpinnerPage />}

  {!loading && products && (
    <>
      {/* PRODUCT DETAILS */}
      <div className="sides">

        {/* LEFT SIDE */}
        <div className="leftside">

          <div className="main-image">
            <img
              src={products.images?.[selectedImage]}
              alt={products.title}
            />
          </div>

          <div className="image-options">
            {products.images?.map((image, index) => (
              <div
                className={`image-option ${
                  index === selectedImage ? "active" : ""
                }`}
                key={index}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${products.title} ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="rightside">

          <h2>{products.title}</h2>

          <p id="dess">
            {products.description}
          </p>

          <div id="rating1">
            {Number(products.rating).toFixed(1)}
            {renderStars(products.rating)}
          </div>

          <div className="pd">
            <p id="dis">
              -{Math.round(products.discountPercentage)}%
            </p>

            <p id="prc">
              Rs. {Math.round(products.price).toLocaleString()}
            </p>
          </div>

          <p id="rp">
            Return Policy:
            <span id="ans">
              {products.returnPolicy}
            </span>
          </p>

          <p id="rp">
            Shipping:
            <span id="ans">
              {products.shippingInformation}
            </span>
          </p>

          <p id="war">
            Warranty:
            <span id="ans">
              {products.warrantyInformation}
            </span>
          </p>


          {/* PRODUCT DETAILS */}
          <div className="detail">

            <h2>Product Details</h2>

            <table className="details-table">
              <tbody>

                <tr>
                  <td className="label">Available:</td>
                  <td className="value">
                    {products.availabilityStatus}
                  </td>
                </tr>

                <tr>
                  <td className="label">Brand:</td>
                  <td className="value">
                    {products.brand}
                  </td>
                </tr>

                <tr>
                  <td className="label">Category:</td>
                  <td className="value">
                    {products.category
                      ?.split("-")
                      .map(
                        (word) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1)
                      )
                      .join(" ")}
                  </td>
                </tr>

                <tr>
                  <td className="label">Tags:</td>
                  <td className="value">
                    {products.tags?.join(", ")}
                  </td>
                </tr>

                <tr>
                  <td className="label">
                    Minimum Order Quantity:
                  </td>

                  <td className="value">
                    {products.minimumOrderQuantity}
                  </td>
                </tr>

                <tr>
                  <td className="label">Sizes:</td>
                  <td className="value">
                    {products.sizes?.join(", ")}
                  </td>
                </tr>

                <tr>
                  <td className="label">Colors:</td>
                  <td className="value">
                    {products.colors?.join(", ")}
                  </td>
                </tr>

              </tbody>
            </table>

          </div>


          {/* ADD TO CART */}
          <button
            type="button"
            id="cartbtn1"
            disabled={isAdded}
            onClick={() => addtoCart(products)}
          >
            {isAdded
              ? "Added to Cart"
              : "Add to Cart"}
          </button>


          {/* QUANTITY */}
          <div id="qq">

            <p>Quantity</p>

            <button
              type="button"
              id="inc"
              onClick={() => increment(products.id)}
            >
              +
            </button>

            <p id="count">
              {cart.find(
                (cartitem) =>
                  cartitem.id === products.id
              )?.quantity || 0}
            </p>

            <button
              type="button"
              id="dec"
              onClick={() => decrement(products.id)}
            >
              -
            </button>

          </div>


          {/* BUY NOW */}
          <button
            type="button"
            id="cartbtn2"
          >
            Buy Now
          </button>

        </div>

      </div>


      {/* RELEVANT PRODUCTS  */}
      <div className="relevant">

        <section className="relevant-section">

          <h2>You May Also Like</h2>

          <div className="relevant-products">

            {Relevant.map((item) => (

              <div
                className="relevant-card"
                key={item.id}
              >

                <img
                  src={item.images[0]}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

                <p id="rel">
                  Rs.{" "}
                  {Math.round(
                    item.price
                  ).toLocaleString()}
                </p>

                <button
                  id="view"
                  type="button"
                  onClick={() =>
                    navigate(
                      `/DetailsPage/${item.id}`
                    )
                  }
                >
                  View Product
                </button>

              </div>

            ))}

          </div>

        </section>

      </div>

    </>
  )}
</>
  );
};

export default DetailsPage;

