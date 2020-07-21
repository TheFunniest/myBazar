import React from "react";
import styles from "./product.module.css";
import Container from "@material-ui/core/Container";
import Slider from "react-slick";
import { ReactComponent as Arrow } from "../../assets/images/mainArrow.svg";
import classNames from "classnames";
// Section Name
import SectionName from "../SectionName/sectionName";

import ProductInfo from "../Home/ProductInfo/productInfo";

// IMAGES
import Tv from "../../assets/images//newProducts/newTV.jpg";
import Washer from "../../assets/images//newProducts/washer.jpg";
import Boots from "../../assets/images//newProducts/boots.jpg";
import Pampers from "../../assets/images//newProducts/pampers.jpg";

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
    swipe: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    speed: 1000,
    onSwipe: () => {
      console.log(12);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <SectionName title={title} />
      <Container>
        <div className={styles.products}>
          <div className={styles.product}>
            <div className={styles.productImg}>
              <span className={styles.new}>новинка</span>
              <img src={Tv} alt="Tv" />
            </div>
            <ProductInfo
              name="Телевизор Samsung UE43RU7200U"
              comments={250}
              price="1 200 000"
              category="Телевизоры"
              producer="ООО “Malika Savdo”"
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
              <span className={styles.new}>новинка</span>
              <img src={Washer} alt="Washer" />
            </div>
            <ProductInfo
              name="Стиральная машина узкая Hotpoint-Ariston RST 6029 ST S RU"
              comments={123}
              price="2 345 789"
              category="Стиральные машины"
              producer="ООО “Hotpoint Uzbekistan”"
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
              <span className={styles.new}>новинка</span>
              <img src={Boots} alt="Boots" />
            </div>
            <ProductInfo
              name="MVVT Brown Men's Snow Boots 2020 winter"
              comments={250}
              price="176 540"
              sale="255 790"
              category="Мужская обувь"
              producer="Zeda Casual Clothing"
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
              <img src={Pampers} alt="Pampers" />
            </div>
            <ProductInfo
              name="Pampers подгузники Premium Care 2 (4-8 кг) 66 шт."
              comments={250}
              price="1 200 000"
              category="Детские подгузники"
              producer="BabyМаркет"
              classes={{
                Rate: "Rating",
                stars: "stars",
                icons: "iconsStandart",
                productInfo: "productInfoStandart",
              }}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;
