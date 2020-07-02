import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./goodsOfTheDay.module.css";

import Good from "./good";

// IMAGES
import phoneImg from "../../../assets/images/GoodsOfTheDay/iphone.png";
import iwatch from "../../../assets/images/GoodsOfTheDay/iwatch.png";
import laptop from "../../../assets/images/GoodsOfTheDay/lenovo.png";

const goodsOfTheDay = () => {
  return (
    <Container>
      <div className={styles.goods}>
        <Good
          img={{ src: phoneImg, width: "63%", sale: "-20" }}
          details={{
            name: "Artel Premium Gold 4/64 ГБ",
            price: "1 200 000",
            todaysSale: "1 500 000",
            comments: 250,
          }}

          classes={{
            Rate: "ratingOfProductOfTheDay",
          }}
        />
        <Good
          img={{ src: iwatch, width: "80%", sale: "-50" }}
          details={{
            name: "Apple Watch Series 5,44 мм, Silver",
            price: "427 895",
            todaysSale: "855 790",
            comments: 75,
          }}

          classes={{
            Rate: "ratingOfProductOfTheDay",
          }}
        />
        <Good
          img={{ src: laptop, width: "80%", sale: "-10" }}
          details={{
            name: "Lenovo V130-15IKB 81HN00ERRU Black",
            price: "3 543 280",
            todaysSale: "3 574 000",
            comments: 13,
          }
          }

          classes={{
            Rate: "ratingOfProductOfTheDay",
          }}
        />
      </div>
    </Container>
  );
};

export default goodsOfTheDay;
