import "swiper/css";
import { useEffect, useState } from "react";

import ProductsFilterCard from "../compounts/ProductsFilterCard";
import { useLocation } from "react-router-dom";

export default function Products({ products }) {
  const { state } = useLocation();
  const priceRanges = [5000, 15000, 30000, 40000, 50000];
  const [price, setprice] = useState("");

  const [filterlist, setFilterlist] = useState(products);

  useEffect(() => {
    if (price === "") {
      setFilterlist(products);
    } else {
      setFilterlist(products.filter((product) => product.price <= price));
    }
  }, [price]);

  useEffect(() => {
    if (state) {
      setFilterlist(
        products.filter((product) => product.category === state.heading)
      );
    }
  }, [state]);

  return (
    <>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Top Rated Items</div>
        </div>
        <div className="filter__products__col">
          <div className="filter__products__row">
            <div className="filter__products__row__button__wraper">
              <button
                onClick={() => {
                  setprice("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="filter__products__row__button"
              >
                All
              </button>
              {priceRanges.map((price) => (
                <button
                  onClick={() => {
                    setprice(price);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="filter__products__row__button"
                >
                  RS:/{price}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="products__filter__card__container__wraper">
          {filterlist.length === 0 ? (
            <div className="products__filter__card__container__wraper__entry">
              No results found
            </div>
          ) : (
            filterlist.map((product, index) => {
              return <ProductsFilterCard product={product} key={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
