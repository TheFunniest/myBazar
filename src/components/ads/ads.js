import React from 'react'
import styles from './styles.module.css'

import advImg from '../../assets/images/ads.jpg'


const Ads = (props) => {
    return (
        <a href="#" className={styles.advertising}>
            <img src={props.photo ? props.photo : advImg} className={styles.adv__img} alt="adImage"/>
        </a>
    )
}

export default Ads;