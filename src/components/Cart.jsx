
// import React, { useEffect, useContext, useState } from "react";
// import cartContext from "../contextApi/cart/cartContext";

// const Cart = () => {
//   const context = useContext(cartContext);

//   const [total, setTotal] = useState(0);

//   const {
//     cart,
//     increment,
//     decrement,
//     removecart
//   } = context;
// const totalItems = cart.reduce((count, item) => {
//   return count + item.quantity;
// }, 0);
//   useEffect(() => {
//     const updateTotal = () => {
//       let count = 0;

//       for (let i = 0; i < cart.length; i++) {
//         count += cart[i].price * cart[i].quantity;
//       }

//       setTotal(count);
//     };

//     updateTotal();
//   }, [cart]);

//   return (
//     <div className="cart-container">

//       <h1
//         style={{
//           textAlign: "center",
//           marginTop: "20px",
//           marginBottom:'20px'
//         }}
//       >
//         {cart.length > 0 ? "Your Cart" : "Cart is Empty"}
//       </h1>

//       {cart.length === 0 && (
//         <p
//           style={{
//             textAlign: "center",
//             marginTop: "30px",
//             marginBottom:"30px"
//           }}
//         >
//           No products added to your cart yet.
//         </p>
//       )}

//       {cart.map((item) => {
//         return (
//           <div className="cart-item" key={item.id}>

//             <img
//               src={item.images[0]}
//               alt={item.title}
//             />

//             <p id="cart-title">
//               {item.title}
//             </p>

//             <p id="price1">
//               Price: Rs. {item.price.toLocaleString()}
//             </p>

//             <div id="qq">

//               <button
//                 type="button"
//                 id="inc"
//                 onClick={() => increment(item.id)}
//               >
//                 +
//               </button>

//               <p id="count">
//                 {item.quantity || 0}
//               </p>

//               <button
//                 type="button"
//                 id="dec"
//                 onClick={() => decrement(item.id)}
//               >
//                 -
//               </button>

//               <button
//                 type="button"
//                 id="remove-cart"
//                 onClick={() => removecart(item.id)}
//               >
//                 Remove
//               </button>

//             </div>

//             <p id="cart-price">
//               Subtotal: Rs.{" "}
//               {(item.price * item.quantity).toLocaleString()}
//             </p>

//           </div>
//         );
//       })}

//      {cart.length > 0 && (
//   <>

//    <div className="cart-summary-card">
//   <h3 className="summary-title">Order Summary</h3>
  
//   <div className="summary-row">
//     <span className="label">Total Items</span>
//     <span className="badge">{totalItems}</span>
//   </div>

//   <div className="summary-row">
//     <span className="label">Unique Products</span>
//     <span className="badge">{cart.length}</span>
//   </div>

//   <div className="summary-divider" />

//   <div className="summary-row total-row">
//     <span className="total-label">Grand Total</span>
//     <span className="total-amount">
//       <small>Rs.</small> {total.toLocaleString()}
//     </span>
//   </div>
// </div>
//   </>
// )}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useContext, useState } from "react";
import cartContext from "../contextApi/cart/cartContext";

const Cart = () => {
  const context = useContext(cartContext);
  const [total, setTotal] = useState(0);

  const { cart, increment, decrement, removecart } = context;

  const totalItems = cart.reduce((count, item) => {
    return count + (item.quantity || 0);
  }, 0);

  useEffect(() => {
    const updateTotal = () => {
      let count = 0;
      for (let i = 0; i < cart.length; i++) {
        count += cart[i].price * (cart[i].quantity || 0);
      }
      setTotal(count);
    };

    updateTotal();
  }, [cart]);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">
        {cart.length > 0 ? "Your Cart" : "Cart is Empty"}
      </h1>

      {cart.length === 0 && (
        <div className="empty-cart-message">
          <p>No products added to your cart yet.</p>
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-layout">
          {/* Cart Items Section */}
          <div className="cart-items-wrapper">
            {cart.map((item) => {
              return (
                <div className="cart-card" key={item.id}>
                  <div className="cart-image-wrapper">
                    <img src={item.images[0]} alt={item.title} />
                  </div>

                  <div className="cart-details">
                    <h3 className="cart-title">{item.title}</h3>
                    <p className="cart-unit-price">
                      Rs. {item.price.toLocaleString()}
                    </p>

                    <div className="cart-controls-row">
                      <div className="quantity-counter">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => decrement(item.id)}
                        >
                          −
                        </button>
                        <span className="qty-count">{item.quantity || 0}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => increment(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removecart(item.id)}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-total">
                    <span className="total-label">Subtotal</span>
                    <span className="total-price">
                      Rs. {(item.price * (item.quantity || 0)).toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary-card">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-row">
              <span className="label">Total Items</span>
              <span className="badge">{totalItems}</span>
            </div>

            <div className="summary-row">
              <span className="label">Unique Products</span>
              <span className="badge">{cart.length}</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-row total-row">
              <span className="total-label">Grand Total</span>
              <span className="total-amount">
                <small>Rs.</small> {total.toLocaleString()}
              </span>
            </div>

            <button type="button" className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;