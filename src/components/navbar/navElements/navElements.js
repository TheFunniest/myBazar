import React from "react";
import styles from "./navElements.module.css";

import compare from '../../../assets/images/compare.png'
import cart from '../../../assets/images/cart.png'
import fav from '../../../assets/images/fav.png'
import signing from '../../../assets/images/signing.png'
import miA3 from '../../../assets/images/miA3.png';
import delBtn from '../../../assets/images/delBtn.png';
import mi8 from '../../../assets/images/mi8.png';
import cartTv from '../../../assets/images/cartTv.png';



const NavElements = () => {
  return (
    <div>
      <ul className={styles.nav__elements}>
          <li className={styles.nav__el}>
              <a href="#" className={styles.nav_el__link}>
              <img className={styles.nav_el__img} src={compare} alt=""/>
              <span className={styles.nav_el__link_text}>
                  Сравнение
              </span>
              </a>
              <span className={styles.compare__count}>
                    2
              </span>
              <div className={styles.compareDropdown}>
                    <ul className={styles.compareDropdownList}>
                        <li className={styles.compareDropdownListItem}>
                            <img src={miA3} alt="Phone"/>
                            <div className={styles.compareBlock}>

                            <div className={styles.compareText}>
                                <p className={styles.comparingProductName}>
                                Xiaomi Mi A3 Blue 8/128 ГБ
                                </p>
                                <p className={styles.comparingProductPrice}>
                                    <strong>3 698 354</strong> сум 
                                </p>
                            </div>
                            <button className={styles.delBtn}>
                                <img src={delBtn} alt="delBtn"/>
                            </button>
                            </div>
                        </li>
                        <li className={styles.compareDropdownListItem}>
                            <img src={miA3} alt="Phone"/>
                            <div className={styles.compareBlock}>

                            <div className={styles.compareText}>
                                <p className={styles.comparingProductName}>
                                Xiaomi Mi A3 Blue 8/128 ГБ
                                </p>
                                <p className={styles.comparingProductPrice}>
                                    <strong>3 698 354</strong> сум 
                                </p>
                            </div>
                            <button className={styles.delBtn}>
                                <img src={delBtn} alt="delBtn"/>
                            </button>
                            </div>
                        </li>
                        <li className={styles.compareDropdownListItem}>

                    <button className={styles.compareBtn}>
                        Сравнить товары 
                    </button>
                        </li>
                    </ul>
              </div>

          </li>
          <li className={styles.nav__el}>
              <a href="#" className={styles.nav_el__link}>
              <img className={styles.nav_el__img} src={cart} alt=""/>
              <span className={styles.nav_el__link_text}>
                  Корзина
              </span>
              </a>
              <span className={styles.compare__count}>
                    3
              </span>

              <div className={styles.compareDropdown}>
                    <ul className={styles.compareDropdownList}>
                        <li className={styles.compareDropdownListItem}>
                            <img src={miA3} alt="Phone"/>
                            <div className={styles.compareBlock}>

                            <div className={styles.compareText}>
                                <p className={styles.comparingProductName}>
                                Xiaomi Mi A3 Blue 8/128 ГБ
                                </p>
                                <p className={styles.comparingProductPrice}>
                                    <strong>3 698 354</strong> сум 
                                </p>
                            </div>
                            <button className={styles.delBtn}>
                                <img src={delBtn} alt="delBtn"/>
                            </button>
                            </div>
                        </li>
                        <li className={styles.compareDropdownListItem}>
                            <img src={mi8} alt="Phone"/>
                            <div className={styles.compareBlock}>

                            <div className={styles.compareText}>
                                <p className={styles.comparingProductName}>
                                Xiaomi Mi 8 Pro 6/64 ГБ
                                </p>
                                <p className={styles.comparingProductPrice}>
                                    <strong>3 698 354</strong> сум 
                                </p>
                            </div>
                            <button className={styles.delBtn}>
                                <img src={delBtn} alt="delBtn"/>
                            </button>
                            </div>
                        </li>
                        <li className={styles.compareDropdownListItem}>
                            <img src={cartTv} alt="cartTv"/>
                            <div className={styles.compareBlock}>

                            <div className={styles.compareText}>
                                <p className={styles.comparingProductName}>
                                Samsung Curved 55" UHD 4K RU7300 Series 7
                                </p>
                                <p className={styles.comparingProductPrice}>
                                    <strong>3 698 354</strong> сум 
                                </p>
                            </div>
                            <button className={styles.delBtn}>
                                <img src={delBtn} alt="delBtn"/>
                            </button>
                            </div>
                        </li>
                        <li className={styles.compareDropdownListItem}>

                    <button className={styles.compareBtn}>
                        Перейти в корзину 
                    </button>
                        </li>
                    </ul>
              </div>

          </li>
          <li className={styles.nav__el}>
              <a href="#" className={styles.nav_el__link}>
              <img className={styles.nav_el__img} src={fav} alt=""/>
              <span className={styles.nav_el__link_text}>
                  Избранное
              </span>
              </a>
              <span className={styles.compare__count}>
                    +9
              </span>
          </li>
          <li className={styles.nav__el}>
              <a href="#" className={styles.nav_el__link}>
              <img className={styles.nav_el__img} src={signing} alt=""/>
              <span className={styles.nav_el__link_text}>
                  <strong>Аккаунт</strong>
              </span>
              </a>
          </li>
      </ul>
    </div>
  );
};

export default NavElements;
