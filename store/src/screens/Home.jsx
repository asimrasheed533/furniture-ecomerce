import React from "react";
import { Link } from "react-router-dom";
import banner from "../asstes/banner.png";

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
    </div>
  );
}
