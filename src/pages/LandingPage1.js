import CustomizableSection from "../components/CustomizableSection";
import BlogSection from "../components/BlogSection";
import BlockchainSection from "../components/BlockchainSection";
import SectionCardForm1 from "../components/SectionCardForm1";
import TestimonialSection from "../components/TestimonialSection";
import Web3makrCard1 from "../components/Web3makrCard1";
import SectionCardForm from "../components/SectionCardForm";
import ContainerWithButtons from "../components/ContainerWithButtons";
import Footer from "../components/Footer";
import styles from "./LandingPage1.module.css";

const LandingPage1 = () => {
  return (
    <div className={styles.landingPage1}>
      <img
        className={styles.landingPage1Child}
        alt=""
        src="/group-139@2x.png"
      />
      <div className={styles.landingPage1Item} />
      <div className={styles.landingPage1Inner} />
      <div className={styles.createScreensDirec}>
        Have a question? Check out our frequently asked questions to find your
        answer.
      </div>
      <div className={styles.frequentlyAskedQuestions}>
        Frequently asked questions
      </div>
      <CustomizableSection />
      <BlogSection />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.icon} alt="" src="/30-1@2x.png" />
        <img className={styles.icon1} alt="" src="/27-1@2x.png" />
        <BlockchainSection />
        <div className={styles.wrapperMockup}>
          <img className={styles.mockupIcon} alt="" src="/mockup@2x.png" />
        </div>
        <SectionCardForm1 />
      </div>
      <TestimonialSection />
      <div className={styles.rectangleDiv} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <Web3makrCard1 />
      <SectionCardForm />
      <div className={styles.wrapperGroup88}>
        <img
          className={styles.wrapperGroup88Child}
          alt=""
          src="/group-88@2x.png"
        />
      </div>
      <div className={styles.groupParent}>
        <ContainerWithButtons />
        <div className={styles.wrapperGroup146}>
          <img
            className={styles.wrapperGroup146Child}
            alt=""
            src="/group-146@2x.png"
          />
        </div>
      </div>
      <div className={styles.frequentlyAskedQuestions1}>Metaverse</div>
      <Footer />
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <a className={styles.rectangleGroup} href="#">
        <div className={styles.groupItem} />
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group@2x.png"
        />
      </a>
      <a className={styles.rectangleContainer} href="#">
        <div className={styles.groupInner} />
        <img
          className={styles.maskGroupIcon2}
          alt=""
          src="/mask-group@2x.png"
        />
      </a>
      <a className={styles.groupA} href="#">
        <div className={styles.groupChild1} />
        <img
          className={styles.maskGroupIcon3}
          alt=""
          src="/mask-group@2x.png"
        />
      </a>
      <a className={styles.landingPage1Inner1} href="#">
        <img className={styles.groupIcon} alt="" src="/group-149@2x.png" />
      </a>
      <a className={styles.rectangleParent1} href="#">
        <div className={styles.groupChild2} />
        <img
          className={styles.maskGroupIcon4}
          alt=""
          src="/mask-group@2x.png"
        />
      </a>
      <a className={styles.rectangleParent2} href="#">
        <div className={styles.groupChild3} />
        <img className={styles.aaveLogoIcon} alt="" src="/aavelogo@2x.png" />
      </a>
      <a className={styles.rectangleParent3} href="#">
        <div className={styles.groupItem} />
        <img
          className={styles.maskGroupIcon5}
          alt=""
          src="/mask-group@2x.png"
        />
      </a>
    </div>
  );
};

export default LandingPage1;
