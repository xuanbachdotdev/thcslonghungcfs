import classNames from "classnames/bind";
import ImageSlide from "../../components/ImageSlide/ImageSlide";
// import TextEditor from "../../components/TextEditor/TextEditor";
import Button from "../../components/Button/";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <ImageSlide />
      {/* <TextEditor/> */}
      <div>
        {" "}
        <h1 className={cx("title")}>Gửi ngay Confession tại đây</h1>
        <Button className={cx("btn")} large>
          <Link to={"/confession"}>Gửi ngay 📄✈ 📄🛫</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
