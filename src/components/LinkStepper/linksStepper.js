import React from "react";
import "./styles.css";

const LinkStepper = () => {
  return (
    <div className="link__stepper">
      <ul className="stepper__links">
        <li className="stepper__link">
          <a href="#" className="stepper__anchor">
            Главная
          </a>
        </li>
        <li className="stepper__link">
          <a href="#" className="stepper__anchor">
            Весь Каталог
          </a>
        </li>
        <li className="stepper__link">
          <a href="#" className="stepper__anchor">
            Телевизоры, аудио и видео
          </a>
        </li>
        <li className="stepper__link">
          <a href="#" className="stepper__anchor">
            Телевизоры
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkStepper;
