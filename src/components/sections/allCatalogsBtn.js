import React from 'react'
import styles from './sections.module.css'

const allCatalogsBtn = () => {
    return (
        <>
            <div className={styles.lines}>
              <div className={styles.catalog__lines}>
                <div className={styles.dot}></div>
                <div className={styles.catalog__line}></div>
              </div>
              <div className={styles.catalog__lines}>
                <div className={styles.dot}></div>
                <div className={styles.catalog__line}></div>
              </div>
              <div className={styles.catalog__lines}>
                <div className={styles.dot}></div>
                <div className={styles.catalog__line}></div>
              </div>
            </div>

            <p className={styles.all_catalog__text}>Весь каталог</p>   
        </>
    )
}

export default allCatalogsBtn
