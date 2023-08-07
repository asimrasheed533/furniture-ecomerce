import { Link } from "react-router-dom";
import React from "react";
import { cartAtom } from "../global";
import { useAtom } from "jotai";

export default function Cart() {
  const [cart, setCart] = useAtom(cartAtom);
  return (
    <div className="cart__container">
      <div className="cart__container__header">
        <div className="cart__container__header__heading">
          <Link to="/" className="cart__container__header__heading__text">
            Back to shop
          </Link>
        </div>
        <div className="cart__container__main">
          <div className="cart__container__wraper">
            {cart.length === 0 ? (
              <div>No Items in Cart</div>
            ) : (
              cart.map((item) => {
                console.log(item);
                return (
                  <div className="cart__container__wraper__card">
                    <div className="cart__container__wraper__card__img">
                      <img
                        src={import.meta.env.VITE_CLOUDNAIRY_API_URL + item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="cart__container__wraper__card__text">
                      <div className="cart__container__wraper__card__text__heading">
                        {item.name}
                      </div>
                      <div className="cart__container__wraper__card__price">
                        Rs:/{item.price}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
            {cart.length !== 0 && (
              <div className="clear__cart__btn">
                <button
                  className="clear__cart__btn__btn"
                  onClick={() => {
                    setCart([]);
                  }}
                >
                  Clear All Cart
                </button>
              </div>
            )}
          </div>
          <div className="cart__container__user__detail__wraper">
            <form className="cart__container__user__detail__wraper__card">
              <div className="cart__container__user__detail__wraper__card__heading">
                Add Delivery Information
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="tel" placeholder="Phone" />
              </div>

              <div className="cart__container__user__detail__wraper__card__input">
                <input type="text" placeholder="Enter Current Address" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="number" placeholder="Enter Card Number" />
              </div>
              <div className="cart__container__user__detail__wraper__card__input">
                <input type="password" placeholder="Enter Cvv" />
              </div>
              <div className="next__btn">
                <button>Pay Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({ img, heading, price, onRemove }) {
  return (
    <div className="cart__container__wraper__card">
      <div className="cart__container__wraper__card__img">
        <img src={img} alt={heading} />
      </div>
      <div className="cart__container__wraper__card__text">
        <div className="cart__container__wraper__card__text__heading">
          {heading}
        </div>
        <div className="cart__container__wraper__card__price">Rs:/{price}</div>
      </div>

      <div className="cart__container__wraper__card__remove">
        <button className="cart__remove__btn" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
