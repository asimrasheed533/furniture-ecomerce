import React from "react";
import { Link } from "react-router-dom";
import banner from "../asstes/banner.png";
import productimg from "../asstes/productimg.png";
import showroom from "../asstes/showroom.png";
import { ProductCard } from "../compounts/ProductCard";

export default function Home() {
  return (
    <div className="main__header">
      <div className="landing__main__banner">
        <div className="landing__main__banner__img">
          <img src={banner} alt="img" />
          <div className="landing__main__banner__img__text__wraper">
            <div className="landing__main__banner__text__container">
              <div className="landing__main__banner__img__text__heading">
                New Generation Ceramic Tile
              </div>
              <div className="landing__main__banner__img__text__detail">
                Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                aptent dapibus metus maecenas consequat. Elementum interdum a
                semper. Netus nullam eros nisi volutpat nibh ex ultricies.
                Pharetra sagittis sit aliquet at. Magna nam platea justo.
              </div>
              <div className="landing__main__banner__img__text__btn">
                <Link
                  className="landing__main__banner__img__text__btn__link"
                  to="/product"
                >
                  more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__container">
        <div className="product__container__header__text__wraper">
          <div className="product__header__heading">Products</div>
          <div className="product__header__sub__heading">
            Lorem Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy Ipsum has been the industry's standard dummy text. Lorem
            industry's standard dummy text text. Lorem industry's standard dummy
            text
          </div>
        </div>
        <div className="product__imgs__container">
          <ProductCard
            productimg={productimg}
            heading="Kingdom Tower"
            subheading="Wood Flooring"
          />
          <ProductCard
            productimg={productimg}
            heading="Dubai Mall"
            subheading="Wood Flooring"
          />
          <ProductCard
            productimg={productimg}
            heading="Kingdom Tower"
            subheading="Wood Flooring"
          />
          <ProductCard
            productimg={productimg}
            heading="Dubai Mall"
            subheading="Wood Flooring"
          />

          <ProductCard
            productimg={productimg}
            heading="Kingdom Tower"
            subheading="Wood Flooring"
          />
        </div>
        <div className="product__see__more__btn">
          <Link className="product__see__more__btn__link" to="/product">
            See More
          </Link>
        </div>
      </div>
      <div className="showrom__container">
        <div className="showrom__container__img">
          <img src={showroom} alt="" />
        </div>
        <div className="showrom__container__content">
          <div className="showrom__container__content__heading">
            Our ShowRooms
          </div>
          <div className="showrom__container__content__sub__heading">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ipsa commodi totam corporis consequatur perspiciatis alias
            voluptatem. Voluptatibus suscipit sit pariatur, recusandae soluta
            omnis voluptatem illum, sequi repudiandae otam corporis consequatur
            perspiciatis alias voluptatem. Voluptatibus suscipit sit pariatur,
            recusandae soluta omnis voluptatem illum, sequi repudianda dicta
            reprehenderit.
          </div>
          <div className="product__see__more__btn">
            <Link className="product__see__more__btn__link" to="/product">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
