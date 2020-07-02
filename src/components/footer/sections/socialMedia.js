import React from "react";
import styles from "./socialMedia.module.css";
import logo from "../../../assets/images/logo_grey.png";

// LOGOS
import whatsapp from "../../../assets/images/whatsapp.png";
import tg from "../../../assets/images/tg.png";
import fb from "../../../assets/images/fb.png";
import vk from "../../../assets/images/vk.png";
import ok from "../../../assets/images/ok.png";
import insta from "../../../assets/images/insta.png";

const socialMedia = () => {
  return (
    <div className={styles.social}>
      <img src={logo} className={styles.logo} alt="logo grey" />
      <div className={styles.socialLogos}>
        <ul className={styles.logoList}>
          <li className={styles.logoListItem}>
            <a href="#" className={styles.socialLink}>
              <img className={styles.socialLogos} src={fb} alt="fb" />
            </a>
          </li>
          <li className={styles.logoListItem}>
            <a href="#" className={styles.socialLink}>
              <img className={styles.socialLogos} src={tg} alt="tg" />
            </a>
          </li>
          <li className={styles.logoListItem}>
            <a href="#" className={styles.socialLink}>
              <img className={styles.socialLogos} src={ok} alt="ok" />
            </a>
          </li>
          <li className={styles.logoListItem}>
            <a href="#" className={styles.socialLink}>
              <img className={styles.socialLogos} src={vk} alt="vk" />
            </a>
          </li>
          <li className={styles.logoListItem}>
            <a href="#" className={styles.socialLink}>
              <img className={styles.socialLogos} src={insta} alt="insta" />
            </a>
          </li>
          <li className={styles.logoListItem}>
            <a href="#" className={styles.socialLink}>
              <img
                className={styles.socialLogos}
                src={whatsapp}
                alt="whatsapp"
              />
            </a>
          </li>
        </ul>
      </div>

      <p className={styles.companyContacts}>
        <strong>+998 92 123 45 67</strong> <strong>•</strong>
        <span>info@mybazar.com</span>
      </p>
    </div>
  );
};

export default socialMedia;
