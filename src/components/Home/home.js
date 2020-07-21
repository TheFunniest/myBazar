import React from "react";

// COMPONENTS

import Slider from "./Slider/slider";
import GoodsOfTheDay from "./GoodsOfTheDay/goodsOfTheDay";
import ProductWithSlider from "../Product/productWithSlider";
import Product from "../Product/product";
import Billboard from "../ads/billboard";


// IMAGES
import Lego from "../../assets/images/lego.png";
import samsung from "../../assets/images/samsung51.png";
import dress from "../../assets/images/dress.png";
import watch from "../../assets/images/watch.png";

const info = {
  Popular: {
    title: "Популярные",
    products: [
      {
        name: "LEGO Ninjago Movie 70620, 5041 дет.",
        comments: 250,
        price: "1 200 000",
        category: "Конструкторы",
        producer: "ООО “Ninja Lego”",
        imgSrc: Lego
      },
      {
        name: "Samsung Galaxy A51 64GB Black (SM-A515F)",
        comments: 123,
        price: "2 345 789",
        category: "Смартфон",
        producer: "ООО “Samsung Electronics”",
        imgSrc: samsung
      },
      {
        name: "GUANQIN 2018, светящиеся, кожаный, черный",
        comments: 250,
        price: "176 540",
        sale:"255 790",
        category: "Аксессуары",
        producer: "ООО “Quartz Time”",
        imgSrc: watch
      },
      {
        name: "Платье Бохо прозрачное черное платье 2019 Vestidos De Festa",
        comments: 250,
        price: "1 200 000",
        category: "Женское платье",
        producer: "ООО “Bahor Ifori”",
        imgSrc: dress
      },
      {
        name: "Платье Бохо прозрачное черное платье 2019 Vestidos De Festa",
        comments: 250,
        price: "1 200 000",
        category: "Женское платье",
        producer: "ООО “Bahor Ifori”",
        imgSrc: dress
      },
      {
        name: "Платье Бохо прозрачное черное платье 2019 Vestidos De Festa",
        comments: 250,
        price: "1 200 000",
        category: "Женское платье",
        producer: "ООО “Bahor Ifori”",
        imgSrc: dress
      },
    ],
  },
};

const home = () => {
  return (
    <>
      <Slider />
      <GoodsOfTheDay />
      <ProductWithSlider title={"Популярные"} info={info["Popular"]} />
      <Product title={"Новинки"} />
      <Billboard />
      <Product title={"Рекомендуем"} />
    </>
  );
};

export default home;
