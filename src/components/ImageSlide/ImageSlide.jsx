import React from "react";
import classNames from "classnames/bind";
import styles from "./ImageSlide.module.scss";
import {images} from "../../constants/index";
const cx = classNames.bind(styles);


function ImageSlide() {
  return (
    <div className={cx("container")}>
      <div className={cx("slider")}>
        {images.map((item, index) => (
          <div key={index} className={cx("background-image")}>
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlide;
