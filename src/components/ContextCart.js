import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { useContext } from "react";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="./images/arrowIcon.png"
            alt="arrow"
            className="arrow-icon"
          />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart-icon" />
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items
          in your shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((x) => {
                return <Items key={x.id} {...x} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart total : <span>{totalAmount}</span>
          </h3>
          <button>Checkout</button>

          <button className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
