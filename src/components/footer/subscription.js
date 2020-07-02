import React from "react";
import styles from "./subscription.module.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const subscription = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <Typography variant="h5" className={styles.subscribe}>Подписаться на новости</Typography>
            <Typography variant="body1" className={styles.subscribe_text}>
              Оставьте свою эл. почту или телефон номер и будьте в курсе <br/> с
              последними новостями
            </Typography>
          </div>
          <div className={styles.email_input}>
            <input type="text" placeholder="Адрес эл.почты или тел.номер" className={styles.input}/>
            <button className={styles.btn}>
                Подписаться
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default subscription;
