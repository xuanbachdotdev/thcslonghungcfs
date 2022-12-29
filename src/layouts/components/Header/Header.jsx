import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

const navlinks = [
  {
    index: 1,
    to: "/",
    class: "Trang chủ",
  },
  {
    index: 2,
    to: "/confession",
    class: "Gửi lời thú tội (Confession) Ver1",
  },
  {
    index: 3,
    to: "/aboutus",
    class: "Về chúng tôi",
  },
];

function Header() {


  const [Toggle, setToggle] = useState(false);

  return (
    <header>
      <div className={cx("logo")}>
        <Link to={"/"}>
          <img src="/logo-doan.png" alt="" />
        </Link>
      </div>
      <div className={cx(Toggle ? "nav-active" : "nav")}>
        <ul onClick={() => setToggle(!Toggle)} className={cx("nav-links")}>
          {navlinks.map((item) => (
            <li key={item.index}>
              <Link to={item.to}>{item.class}</Link>
            </li>
          ))}
        </ul>
      </div>
      <FontAwesomeIcon
        onClick={() => setToggle(!Toggle)}
        className={cx(Toggle ? "hamburger-icon-active" : "hamburger-icon")}
        icon={faBars}
      />
    </header>
  );
}

export default Header;
