import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
// import {socialMedia} from "../../constants/index"

const cx = classNames.bind(styles);


function Footer() {
  return (
      <footer className={cx("Wrapper")}>
        <p className={cx("copyright")}>
          Copyright Ⓒ 2022 THCS Long Hung Confession. All Rights Reserved.
        </p>
        {/* <div className={cx("social-map")}>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={cx("social-item")}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div> */}
      </footer>
  );
}

export default Footer;
