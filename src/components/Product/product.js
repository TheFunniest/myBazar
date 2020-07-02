import React, { useState } from "react";
import styles from "./product.module.css";
import Container from "@material-ui/core/Container";
import Slider from "react-slick";
import { ReactComponent as Arrow } from "../../assets/images/mainArrow.svg";
import classNames from "classnames";
// Section Name
import SectionName from "../SectionName/sectionName";

import ProductInfo from "../Home/ProductInfo/productInfo";

// IMAGES
import Lego from "../../assets/images/lego.png";
import samsung from "../../assets/images/samsung51.png";
import dress from "../../assets/images/dress.png";
import watch from "../../assets/images/watch.png";

const Product = ({ title }) => {
  function SampleNextArrow(props) {
    return (
      <button
        className={classNames(styles.Arrow, styles.nextArrow)}
        onClick={props.onClick}
      >
        <Arrow />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    // console.log(props)
    return (
      <button
        className={classNames(styles.Arrow, styles.prevArrow)}
        onClick={props.onClick}
      >
        <Arrow />
      </button>
    );
  }
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    speed: 1000,
    onSwipe: () => {
      console.log(12)
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <SectionName title={title} />
      <Container>
        <Slider
          slickPlay
          {...settings}
          className={styles.carousel}
        >
          <div className={styles.product}>
            <div className={styles.productImg}>
              <span className={styles.new}>новинка</span>
              <img src={Lego} alt="lego" />
            </div>
            <ProductInfo
              name="LEGO Ninjago Movie 70620, 5041 дет."
              comments={250}
              price="1 200 000"
              category="Конструкторы"
              producer="ООО “Ninja Lego”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src={samsung} alt="samsung" />
            </div>
            <ProductInfo
              name="Samsung Galaxy A51 64GB Black (SM-A515F)"
              comments={123}
              price="2 345 789"
              category="Смартфон"
              producer="ООО “Samsung Electronics”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src={watch} alt="watch" />
            </div>
            <ProductInfo
              name="GUANQIN 2018, светящиеся, кожаный, черный"
              comments={250}
              price="176 540"
              sale="255 790"
              category="Конструкторы"
              producer="ООО “Ninja Lego”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src={dress} alt="dress" />
            </div>
            <ProductInfo
              name="LEGO Ninjago Movie 70620, 5041 дет."
              comments={250}
              price="1 200 000"
              category="Конструкторы"
              producer="ООО “Ninja Lego”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src={dress} alt="dress" />
            </div>
            <ProductInfo
              name="LEGO Ninjago Movie 70620, 5041 дет."
              comments={250}
              price="1 200 000"
              category="Конструкторы"
              producer="ООО “Ninja Lego”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src={dress} alt="dress" />
            </div>
            <ProductInfo
              name="LEGO Ninjago Movie 70620, 5041 дет."
              comments={250}
              price="1 200 000"
              category="Конструкторы"
              producer="ООО “Ninja Lego”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <img src={dress} alt="dress" />
            </div>
            <ProductInfo
              name="LEGO Ninjago Movie 70620, 5041 дет."
              comments={250}
              price="1 200 000"
              category="Конструкторы"
              producer="ООО “Ninja Lego”"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Product;
