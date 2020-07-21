import React from "react";
import * as cx from "classnames";
import styles from "./styles.module.css";

import Container from "@material-ui/core/Container";
import phones from "../../assets/images/AdImages/phones.jpg";
import oneTwo from "../../assets/images/AdImages/1=2.jpg";
import presentsForAll from "../../assets/images/AdImages/presentsForAll.jpg";

const Billboard = () => {
  return (
    <Container>
      <div className={styles.billboard}>
        <div className={styles.billboard_item}>
          <img src={phones} alt="phones" />
          <div className={cx(styles.billboard_item__text, styles.position1)}>
            <p>
              Успей купить
              <br /> Redmi 8 со
              <br /> скидкой
            </p>
            <button className={cx(styles.billboard_item__btn, styles.btn1)}>
              Купить
            </button>
          </div>
        </div>
        <div className={styles.billboard_item}>
          <img src={presentsForAll} alt="presentsForAll" />
          <div className={cx(styles.billboard_item__text, styles.position2)}>
            <p>
              ПОДАРКИ <br /> для ВСЕХ
            </p>
            <button className={cx(styles.billboard_item__btn, styles.btn2)}>
              Подробно
            </button>
          </div>
        </div>
        <div className={styles.billboard_item}>
          <img src={oneTwo} alt="oneTwo" />
          <div className={cx(styles.billboard_item__text, styles.position3)}>
            <p>
              1=2 
              <span>
                Простая <br />
                арифметика
              </span>
            </p>
            <button className={cx(styles.billboard_item__btn, styles.btn3)}>
              Подробно
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Billboard;
