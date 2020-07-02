import React from 'react';
import styles from './pagination.module.css'
import ReactPaginate from 'react-paginate';

import {ReactComponent as Arrow  } from '../../assets/images/arrow.svg'

const BottomPagination = () => {



    return (
        <div className={styles.container}>
            <ReactPaginate
            pageCount={10}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            nextLabel={<Arrow/>}
            previousClassName={styles.d_none}
            containerClassName={styles.pagination__container}
            pageClassName={styles.page}
            pageLinkClassName={styles.page_link}
            breakClassName={styles.d_none}
            nextLinkClassName={styles.next_page}
            activeClassName={styles.active}
            />
        </div>

    )
}


export default BottomPagination;