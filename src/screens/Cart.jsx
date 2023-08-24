import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { cartAtom } from "../global";
import { useAtom } from "jotai";
import axios from "../utils/axios";

export default function Cart() {
  const [cart, setCart] = useAtom(cartAtom);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardCvvError, setCardCvvError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError("Name is required");
    }
    
    if (address === "") {
      setAddressError("Address is required");
    }
    if (email === "") {
      setEmailError("Email is required");
    }
    if (phone === "") {
      setPhoneError("Phone No is required");
    }
    if (cardNumber === "") {
      setCardNumberError("Card Number is required");
    }
    if (date === "") {
      setDateError("Date is required");
    }
    if (cardCvv === "") {
      setCardCvvError("Card Cvv is required");
    }
    if (
      name !== "" &&
      email !== "" &&
      address !== "" &&
      phone !== "" &&
      cardNumber !== "" &&
      date !== "" &&
      cardCvv !== ""
    ) {
      alert("Your Order is Placed");
      axios
        .post("/orders", {
          // console.log({
          username: name,
          email: email,
          phone: phone,
          address: address,
          products: cart,
          total: cart.reduce((acc, item) => {
            return acc + item.price;
          }, 0),
          status: "pending",
          cardNumber: cardNumber,
          cardName: name,
          cardDate: date,
          cardCvv: cardCvv,
        })
        .then((res) => {
          console.log(res);
          setSuccess(true);
          setName("");
          setEmail("");
          setAddress("");
          setPhone("");
          setCardNumber("");
          setDate("");
          setCardCvv("");
          setCart([]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);
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
          {success ? (
            <div className="cart__container__user__detail__wraper">
              Order has be submitted successfully
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="cart__container__user__detail__wraper"
            >
              <div className="cart__container__user__detail__wraper__card">
                <div className="cart__container__user__detail__wraper__card__heading">
                  Add Information
                </div>
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Name
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setNameError("Name is required");
                      } else {
                        setNameError("");
                      }
                      setName(e.target.value);
                    }}
                  />
                  {nameError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {nameError}
                    </div>
                  )}
                </div>
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Email Address
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder=" Enter Email Address"
                    value={email}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setEmailError("Email is required");
                      } else {
                        setEmailError("");
                      }
                      setEmail(e.target.value);
                    }}
                  />
                  {emailError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {emailError}
                    </div>
                  )}
                </div>
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Address
                  </div>
                  <input
                    name="addess"
                    type="text"
                    placeholder="enter your Adress"
                    value={address}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setAddressError("Address is required");
                      } else {
                        setAddressError("");
                      }
                      setAddress(e.target.value);
                    }}
                  />
                  {addressError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {addressError}
                    </div>
                  )}
                </div>
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Phone No.
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone No"
                    value={phone}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setPhoneError("Phone No is required");
                      } else {
                        setPhoneError("");
                      }
                      setPhone(e.target.value);
                    }}
                  />
                  {phoneError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {phoneError}
                    </div>
                  )}
                </div>
              </div>
              <div className="cart__container__user__detail__wraper__card">
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Card Details
                  </div>
                  <input
                    name="cardNumber"
                    type="text"
                    placeholder="-- --- --- --"
                    value={cardNumber}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setCardNumberError("Card Number is required");
                      } else {
                        setCardNumberError("");
                      }
                      setCardNumber(e.target.value);
                    }}
                  />
                  {cardNumberError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {cardNumberError}
                    </div>
                  )}
                </div>
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Card Date
                  </div>
                  <input
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setDateError("Date is required");
                      } else {
                        setDateError("");
                      }
                      setDate(e.target.value);
                    }}
                  />
                  {dateError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {dateError}
                    </div>
                  )}
                </div>
                <div className="cart__container__user__detail__wraper__card__input">
                  <div className="cart__container__user__detail__wraper__card__input__heading">
                    Card Cvv
                  </div>
                  <input
                    name="cardCvv"
                    type="number"
                    placeholder="Card Cvv"
                    value={cardCvv}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setCardCvvError("Card Cvv is required");
                      } else {
                        setCardCvvError("");
                      }
                      setCardCvv(e.target.value);
                    }}
                  />
                  {cardCvvError !== "" && (
                    <div className="cart__container__user__detail__wraper__card__input__error">
                      {cardCvvError}
                    </div>
                  )}
                </div>
                <div className="next__btn">
                  <button type="submit">Buy Now</button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
