import React, {useState} from 'react'
import styles from './search.module.css'

import searchIcon from '../../assets/images/searchIcon.png'
import searchListIcon from '../../assets/images/searchListIcon.png'
import searchItemArrow from '../../assets/images/searchItemArrw.png'
import searchPhone1 from '../../assets/images/searchPhone1.png'
import mi8 from '../../assets/images/mi8.png'
import mi10 from '../../assets/images/mi10.png'
import miA3 from '../../assets/images/miA3.png'
import AirDots from '../../assets/images/airdots.png'
import brandXiaomi from '../../assets/images/brandXiaomi.png'
import brandXiaoZhengfu from '../../assets/images/xiaoZhengfu.png'




const SearchBlock = () => {
    const [value, setValue] = useState('');
    return (
        <form
        className={styles.searchForm}
        >
       <div className={styles.input_wrapper}>
       <input
         placeholder="Поиск на myBazar"
         className={styles.search__input}
         value={value}
         onChange={(e) => {
            setValue(e.target.value)
         }}
        //  onChange={this.handleInputChange}
       />
       <div className={styles.results} style={{
           display: value.length ? 'flex' : 'none'
       }}>
            <ul className={styles.results_list}>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={searchListIcon} alt="searchListIcon"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        Xiaomi Max 2
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={searchListIcon} alt="searchListIcon"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        Xiaomi Redmi 4X
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={searchListIcon} alt="searchListIcon"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        Xiaomi Mi A2 lite
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={searchListIcon} alt="searchListIcon"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        Xiaomi Mi AirDots
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={searchListIcon} alt="searchListIcon"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        Xiaomi Pocophone
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={brandXiaomi} alt="brandXiaomi"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiaomi
                        <span className={styles.brandName}>
                            Бренд
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={brandXiaoZhengfu} alt="brandXiaoZhengfu"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiao Zhengfu
                        <span className={styles.brandName}>
                            Бренд
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={searchPhone1} alt="searchListIcon"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiaomi Mi 9T 6/128 Blue
                        <span className={styles.price}>
                            <strong>
                            5 654 214
                                </strong> сум
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={mi8} alt="mi8"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiaomi Mi 8 Pro 4/64
                        <span className={styles.price}>
                            <strong>
                            3 128 451
                                </strong> сум
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={mi10} alt="mi10"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiaomi Mi 10 Pro 8/128
                        <span className={styles.price}>
                            <strong>
                            7 893 012
                                </strong> сум
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={miA3} alt="miA3"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiaomi Mi A3 Blue 8/128
                        <span className={styles.price}>
                            <strong>
                            3 698 354 
                                </strong> сум
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                <li className={styles.list_item}>
                    <div className={styles.list_icon}>
                    <img src={AirDots} alt="AirDots"/>
                    </div>
                    <a href="#" className={styles.result_link}>
                        <p className={styles.productName}>
                        Xiaomi AirDots
                        <span className={styles.price}>
                            <strong>
                            908 123 
                                </strong> сум
                        </span>
                        </p>
                    <div className={styles.searchItemArrow}>
                        <img src={searchItemArrow} alt="searchItemArrow"/>
                    </div>
                    </a>
                </li>
                
            </ul>
       </div>

       </div>
       <div className={styles.searchDnI}>
           <div className={styles.all}>
               <p className={styles.product__categories}>
               Все категории
               </p>
               <div className={styles.allCategories}>
                <ul className={styles.allCategoriesList}>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Все категории</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Телевизоры, аудио, видео</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Смартфоны и гаджеты</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Техника для дома</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Техника для кухни</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Красота и здоровье</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Игры , софт, развлечение</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Компьютеры</a>
                    </li>
                    <li className={styles.allCategoriesListItem}>
                        <a href="#" className={styles.allCategoriesLink}>Автопродукты</a>
                    </li>
                </ul>
           </div>
           </div>
           <img src={searchIcon} alt=""/>
           
       </div>
     </form>
    )
}

export default SearchBlock;