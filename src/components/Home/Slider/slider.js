import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./slider.module.css";
import classNames from "classnames";
import Container from '@material-ui/core/Container'

import { ReactComponent as Arrow } from "../../../assets/images/sliderImages/next.svg";
import photo1 from "../../../assets/images/sliderImages/Lenovo.jpg";
import photo2 from "../../../assets/images/sliderImages/mi.jpg";
import photo3 from "../../../assets/images/sliderImages/phones.jpg";

const slider = () => {
  return (
    <>
      <Carousel
        className={styles.Carousel}
        showThumbs={false}
        showStatus={false}
        renderArrowNext={(clickHandler) => {
          return (
            <button
              className={classNames(styles.btn, styles.btnPrev)}
              onClick={clickHandler}
            >
              <Arrow className={styles.nextArrow} />
            </button>
          );
        }}
        renderArrowPrev={(clickHandler) => {
          return (
            <button
              className={classNames(styles.btn, styles.btnNext)}
              onClick={clickHandler}
            >
              <Arrow className={styles.prevArrow} />
            </button>
          );
        }}
      >
        <div className={styles.slider_item}>
          <Container>

        <h1 className={styles.sliderText}>Купи Z5 Pro <br/> и получи интернет<br/> трафик со скидкой<br/> до 50%</h1>
          </Container>
          <img src={photo1} alt="Lenovo"  className={styles.photo}/>
        </div>
        <div>
          <img src={photo2} alt="Lenovo"  className={styles.photo}/>
        </div>
        <div>
          <img src={photo3} alt="Lenovo"  className={styles.photo}/>
        </div>
      </Carousel>
    </>
  );
};

export default slider;
