import React from "react";
import { Link } from "react-router-dom";
export default function SelectCatagorieCard({
  img,
  heading,
  subheading,
  link,
}) {
  return (
    <Link
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      to={link}
      className="select__catagories__card"
    >
      <div className="select__catagories__card__img">
        <img src={img} alt="select setegories" />
      </div>
      <div className="select__catagories__card__text">
        <div className="select__catagories__card__text__heading">{heading}</div>
        <div className="select__catagories__card__text__sub__heading">
          {subheading}
        </div>
      </div>
    </Link>
  );
}
