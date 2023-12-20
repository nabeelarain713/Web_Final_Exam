import { useEffect } from "react";
import ElementsButtonsOutline from "./ElementsButtonsOutline";
import styles from "./ContainerWithButtons.module.css";

const ContainerWithButtons = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.createScreensDirecParent}>
      <div className={styles.createScreensDirec}>No credit card required.</div>
      <div className={styles.frequentlyAskedQuestions}>
        Start a free trial today
      </div>
      <button
        className={styles.elementsButtonsOutlineParent}
        data-animate-on-scroll
      >
        <ElementsButtonsOutline
          buttonText="Download Now"
          showButtonText={false}
          elementsButtonsOutlineWidth="100%"
          elementsButtonsOutlineHeight="100%"
          elementsButtonsOutlinePosition="absolute"
          elementsButtonsOutlineTop="0%"
          elementsButtonsOutlineRight="0%"
          elementsButtonsOutlineBottom="0%"
          elementsButtonsOutlineLeft="0%"
          baseBorder="unset"
          baseBoxSizing="unset"
          baseBackgroundColor="#6f348e"
          buttonTextTop="27.51%"
        />
        <div className={styles.buttonText}>Start for free</div>
      </button>
    </div>
  );
};

export default ContainerWithButtons;
