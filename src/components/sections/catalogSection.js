import React, { Children } from "react";
import styles from "./sections.module.css";

import { ReactComponent as NextArrow } from "../../assets/images/searchItemArrw.svg";
import classNames from 'classnames'


const catalogSection = ({ Img, title, children }) => {
  return (
    <li className={styles.all_catalog__dropDownItem}>
      <div className={styles.all_catalog__dropDownItemImg}>
        <Img />
      </div>
      <div className={styles.all_catalog__dropDownItemSection}>
        <p>{title}</p>
        <NextArrow className={styles.NextArrow} />
      </div>
      <div className={styles.subCatalog}>
      <ul >
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={styles.all_catalog__dropDownItemSection}>
            <p className={styles.subCatalogSectionText}>Мужчинам</p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
          <ul className={styles.productList}>
            <li className={styles.productType}>
              <a href="#">
              Одежда
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Обувь
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Нижнее бельё
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Носки
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Пляжная одежда
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Домашняя одежда
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Аксессуары
              </a>
            </li>
            <li className={styles.productType}>
              <a href="#">
              Спортивные
              </a>
            </li>
          </ul>
        </li>
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={styles.all_catalog__dropDownItemSection}>
            <p className={styles.subCatalogSectionText}>Женщинам</p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
        </li>
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={styles.all_catalog__dropDownItemSection}>
            <p className={styles.subCatalogSectionText}>Детям</p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
        </li>
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={styles.all_catalog__dropDownItemSection}>
            <p className={styles.subCatalogSectionText}>Детям</p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
        </li>
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={classNames(styles.all_catalog__dropDownItemSection)}>
            <p className={styles.subCatalogSectionText}>Спецодежда</p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
        </li>
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={styles.all_catalog__dropDownItemSection}>
            <p className={styles.subCatalogSectionText}>Путешествие</p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
        </li>
        <li
          className={classNames(
            styles.all_catalog__dropDownItem,
            styles.subCatalogItem
          )}
        >
          <div className={styles.all_catalog__dropDownItemSection}>
            <p className={styles.subCatalogSectionText}>
              Уход за одеждой и обувью
            </p>
            <NextArrow className={styles.subCatalogNextIcon} />
          </div>
        </li>
      </ul>
      {children}
      </div>
      

    </li>
  );
};

export default catalogSection;
