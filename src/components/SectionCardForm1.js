import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./SectionCardForm1.module.css";

const SectionCardForm1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <Button className={styles.groupItem} variant="outline-primary">
          Start for free
        </Button>
        <div className={styles.menuParent}>
          <div className={styles.menu}>
            <a className={styles.about} href="#">
              Web3Makr
            </a>
            <a className={styles.workProcess} href="#">
              Services
            </a>
            <a className={styles.workProcess1} href="#">
              White paper
            </a>
            <a className={styles.services} href="#">
              Tool
            </a>
            <a className={styles.contacts} href="#">
              Contact us
            </a>
          </div>
          <a className={styles.maskGroup} href="#">
            <img
              className={styles.logo3308b1b4999411a4297e11dc8Icon}
              alt=""
              src="/logo3308b1b4999411a4297e11dc8f97f4b88-1@2x.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionCardForm1;
