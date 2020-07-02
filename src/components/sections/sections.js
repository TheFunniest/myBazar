import React from "react";
import styles from "./sections.module.css";

import AllCatalogBtn from "./allCatalogsBtn";
import CatalogSection from "./catalogSection";

//ALL CATALOG IMAGES
import justAd from '../../assets/images/justAd.jpg'
import { ReactComponent as Sales } from "../../assets/images/allCatalogImages/sales.svg";
import { ReactComponent as Tv } from "../../assets/images/allCatalogImages/tv.svg";
import { ReactComponent as Smartphones } from "../../assets/images/allCatalogImages/smartphones.svg";
import { ReactComponent as Products } from "../../assets/images/allCatalogImages/products.svg";
import { ReactComponent as Photos } from "../../assets/images/allCatalogImages/photos.svg";
import { ReactComponent as Laptops } from "../../assets/images/allCatalogImages/laptops.svg";
import { ReactComponent as Health } from "../../assets/images/allCatalogImages/health.svg";
import { ReactComponent as Games } from "../../assets/images/allCatalogImages/games.svg";
import { ReactComponent as ForKitchen } from "../../assets/images/allCatalogImages/forKitchen.svg";
import { ReactComponent as ForHome } from "../../assets/images/allCatalogImages/forHome.svg";
import { ReactComponent as Clothes } from "../../assets/images/allCatalogImages/tshirt.svg";
import { ReactComponent as AutoProducts } from "../../assets/images/allCatalogImages/autoProducts.svg";

// Brands

import Adidas from '../../assets/images/Brands/Adidas.png'
import Just from '../../assets/images/Brands/Just.png'
import TerraPro from '../../assets/images/Brands/TerraPro.png'
import Levis from '../../assets/images/Brands/Levis.png'
import Nike from '../../assets/images/Brands/Nike.png'
import Respect from '../../assets/images/Brands/Respect.png'
import Redtag from '../../assets/images/Brands/Redtag.png'



const Sections = () => {
  return (
    <div className={styles.sections}>
      <ul className={styles.section__list}>
        <li>
          <div className={styles.all_catalog}>
            <AllCatalogBtn />
            <ul className={styles.all_catalog__dropDown}>
              <CatalogSection title={"Акции и скидки"} Img={Sales} />
              <CatalogSection title={"Телевизоры, аудио и видео"} Img={Tv} />
              <CatalogSection title={"Смартфоны и гаджеты"} Img={Smartphones} />
              <CatalogSection title={"Одежда и обувь"} Img={Clothes}>
                <div>
                  <img className={styles.adImage} src={justAd} alt="" />
                </div>
                <ul className={styles.brands}>
                  <li className={styles.brandsName}>
                    <a href="/brands">
                      Все бренды
                    </a>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={Redtag} alt="Redtag"/>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={Respect} alt="Respect"/>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={TerraPro} alt="TerraPro"/>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={Just} alt="Just"/>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={Levis} alt="Levis"/>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={Nike} alt="Nike"/>
                  </li>
                  <li className={styles.brandsImage}>
                      <img src={Adidas} alt="Adidas"/>
                  </li>
                </ul>
              </CatalogSection>
              <CatalogSection title={"Продукты питания"} Img={Products} />
              <CatalogSection title={"Компьютеры и ноутбуки"} Img={Laptops} />
              <CatalogSection title={"Для дома"} Img={ForHome} />
              <CatalogSection title={"Для кухни"} Img={ForKitchen} />
              <CatalogSection title={"Красота и здоровье"} Img={Health} />
              <CatalogSection title={"Фото и видео"} Img={Photos} />
              <CatalogSection title={"Игры, софт, развлечения"} Img={Games} />
              <CatalogSection title={"Автопродукты"} Img={AutoProducts} />
            </ul>
          </div>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Новые товары
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Скидки
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Акции
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Топ бренды
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Блог
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Видеоролики
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Доставка
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Для бизнеса
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Магазины
          </a>
        </li>
        <li className={styles.section__type}>
          <a href="#" className={styles.section__link}>
            Оплата
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sections;
