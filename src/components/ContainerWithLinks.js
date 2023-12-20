import { useMemo } from "react";
import styles from "./ContainerWithLinks.module.css";

const ContainerWithLinks = ({
  dimensions,
  propLeft,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft1,
}) => {
  const buttonsAutoLayoutOnFilStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft1]);

  return (
    <div
      className={styles.buttonsAutoLayoutOnFil}
      style={buttonsAutoLayoutOnFilStyle}
    >
      <a className={styles.iconssocialsfacebook} href="#">
        <img
          className={styles.vectorIcon}
          alt=""
          src={dimensions}
          style={vectorIconStyle}
        />
      </a>
    </div>
  );
};

export default ContainerWithLinks;
