import classNames from "classnames/bind";
import styles from "./Confession.module.scss";

const cx = classNames.bind(styles);

function Confession() {
	
  return (
    <>
      <div className={cx("Wrapper")}>
        <iframe
          className={cx("confession")}
          src="https://docs.google.com/forms/d/e/1FAIpQLSf47zbJiWZ7NOw-MA1vdTHX-HjjbbGpkvLouNGauW8bT5Bz7Q/viewform?embedded=true"
        >
          Đang tải…
        </iframe>
      </div>
    </>
  );
}

export default Confession;
