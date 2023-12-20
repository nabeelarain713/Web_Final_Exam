import LinkCardFormFilter from "./LinkCardFormFilter";
import styles from "./BlockchainSection.module.css";

const BlockchainSection = () => {
  return (
    <div className={styles.wrapperGroup87Parent}>
      <div className={styles.wrapperGroup87}>
        <img
          className={styles.wrapperGroup87Child}
          alt=""
          src="/group-87@2x.png"
        />
      </div>
      <div className={styles.elementsButtonsPlay02Parent}>
        <LinkCardFormFilter />
        <div className={styles.createScreensDirecParent}>
          <div className={styles.createScreensDirec}>
            Unlock the blockchain potential to create Web3 Applications
          </div>
          <div className={styles.welcomeToTheContainer}>
            <span>Web</span>
            <span className={styles.makr}>3Makr</span>
            <span> Redefining How You Create</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
