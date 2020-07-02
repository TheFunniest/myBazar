import React from "react";
import styles from "./sections.module.css";
import Typography from "@material-ui/core/Typography";

const section = ({ title, sections }) => {
  return (
    <div className={styles.col}>
        <Typography variant="h6" className={styles.title}>
            {title}
        </Typography>
      <ul className={styles.list}>
        {sections.map((section) => {
          return (
            <li key={section} className={styles.list_item}>
              <a href="#" className={styles.link}>
                <Typography variant="body2">{section}</Typography>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default section;
