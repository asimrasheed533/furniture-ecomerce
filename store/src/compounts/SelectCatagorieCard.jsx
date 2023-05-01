import React from "react";
export default function SelectCatagorieCard({ tabel, heading, subheading }) {
  return (
    <div className="select__catagories__card">
      <div className="select__catagories__card__img">
        <img src={tabel} alt="select setegories" />
      </div>
      <div className="select__catagories__card__text">
        <div className="select__catagories__card__text__heading">{heading}</div>
        <div className="select__catagories__card__text__sub__heading">
          {subheading}
        </div>
      </div>
    </div>
  );
}
