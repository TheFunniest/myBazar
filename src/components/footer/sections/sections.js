import React from "react";
import styles from "./sections.module.css";
import Container from "@material-ui/core/Container";
import Section from './section'
import SocialMedia from './socialMedia'

const sections = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Section title="Пресс-центр" sections={["История", "Миссии и ценности", "Пресс-релизы","СМИ о нас","Фотографии","Контакты для связи"]}/>
          <Section title="Сервис" sections={["Услуги", "Доставка", "Самовызов","Контакты","Сервис центр","Оставить отзыв"]}/>
          <Section title="О компании" sections={["Тендеры", "Реклама на сайте", "Арендодателям","Арендаторам","Продажа юридическим лицам","Вакансии"]}/>
        </div>
        <SocialMedia/>
        </div>
        <p className={styles.companyInfo}>
        © СП ООО “MyBazar” - 2020. Все права защищены 
        </p>
      </Container>
    </div>
  );
};

export default sections;
