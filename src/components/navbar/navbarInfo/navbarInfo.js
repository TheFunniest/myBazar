import React from 'react'
import Container from '@material-ui/core/Container'


const navbarInfo = () => {
    return (
        <div className="nav__info">
        <Container>
            <div className="nav__info_text">

          <span className="contact__info"><strong className="contact__phone">+998921234567</strong> info@mybazar.com</span>
          <span className="sale">
            <span className="sale_type">РАСПРОДАЖА КНИГ!</span>
            <span className="sale__info">
              Снизили цены на более 3 тысячи книг
            </span>
          </span>
          <ul className="change__lang">
            <li>
              <a href="#">O'zbekcha</a>
            </li>
            <li>
              <a href="#" className="active_lang">Русский</a>
            </li>
            <li>
              <a href="#">English</a>
            </li>
          </ul>
            </div>
        </Container>
      </div>
    )
}

export default navbarInfo;