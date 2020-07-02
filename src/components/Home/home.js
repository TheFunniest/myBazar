import React from 'react'


// COMPONENTS

import Slider from './Slider/slider'
import GoodsOfTheDay from './GoodsOfTheDay/goodsOfTheDay'
import Product from '../Product/product';

const home = () => {
    return (
        <>
        <Slider/>
        <GoodsOfTheDay/>
        <Product title={"Популярные"}/>
        </>
    )
}

export default home
