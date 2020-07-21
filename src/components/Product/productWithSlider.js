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
import Lego from "../../assets/images/lego.png";
import samsung from "../../assets/images/samsung51.png";
import dress from "../../assets/images/dress.png";
import watch from "../../assets/images/watch.png";

const Product = ({ info }) => {
  const { products } = info;
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
    speed: 1000,
    onSwipe: () => {
      console.log(12);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <SectionName title={info.title} />
      <Container>
        <Slider slickPlay {...settings} className={styles.carousel}>
          {products.map((product) => {
            return (
              <div className={styles.product} key={product.name}>
                <div className={styles.productImg}>
                  {/* <span className={styles.new}>новинка</span> */}
                  <img src={product.imgSrc} alt={product.name} />
                </div>
                <ProductInfo
                  name={product.name}
                  comments={product.comments}
                  price={product.price}
                  category={product.category}
                  producer={product.producer}
                  classes={{
                    Rate: "Rating",
                    stars: "stars",
                    icons: "iconsStandart",
                    productInfo: "productInfoStandart",
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </Container>
    </>
  );
};

export default Product;
