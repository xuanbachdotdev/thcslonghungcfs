import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header className={cx("header")} />
      <div className={cx("container")}>
        {/* <Sidebar currentUser={currentUser} className={cx("sidebar")} /> */}
        <div className={cx("content")}>{children}</div>
      </div>
	<Footer className={cx("footer")}/>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
