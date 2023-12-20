import ContainerWithLinks from "./ContainerWithLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.copyright2021Parent}>
      <div className={styles.copyright2021}>Copyright 2022 © Web3makr</div>
      <div className={styles.social}>
        <ContainerWithLinks
          dimensions="/vector@2x.png"
          propLeft="46.4px"
          propHeight="70.83%"
          propWidth="87.08%"
          propTop="16.67%"
          propRight="6.67%"
          propBottom="12.5%"
          propLeft1="6.25%"
        />
        <ContainerWithLinks
          dimensions="/vector@2x.png"
          propLeft="0px"
          propHeight="83.33%"
          propWidth="83.33%"
          propTop="8.33%"
          propRight="8.33%"
          propBottom="8.33%"
          propLeft1="8.33%"
        />
        <ContainerWithLinks
          dimensions="/vector@2x.png"
          propLeft="92.9px"
          propHeight="82.92%"
          propWidth="83.33%"
          propTop="8.33%"
          propRight="8.33%"
          propBottom="8.75%"
          propLeft1="8.33%"
        />
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-114@2x.png" />
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
      </div>
    </div>
  );
};

export default Footer;
