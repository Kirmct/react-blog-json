import React, { useEffect, useState } from "react";
import arrowUp from "../../assets/arrowUp.svg";
import styles from "./ScrollTopButton.module.css";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toogleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else setVisible(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toogleVisibility);
    return () => {
      window.removeEventListener("scroll", toogleVisibility);
    };
  }, []);
  return (
    <>
      {visible && (
        <button
          className={`container ${styles.btnTop} moveUpAndDown`}
          onClick={handleClick}
        >
          <img src={arrowUp} width={120} height={120} />
        </button>
      )}
    </>
  );
};

export default ScrollTopButton;
