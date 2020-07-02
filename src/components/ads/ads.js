import React from 'react'
import './styles.css'

import advImg from '../../assets/images/ads.jpg'


const Ads = (props) => {
    return (
        <a href="#" className="advertising">
            <img src={props.photo ? props.photo : advImg} className="adv__img" alt=""/>
        </a>
    )
}

export default Ads;