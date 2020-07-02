import React from 'react'
import styles from './sectionName.module.css'
import Container from '@material-ui/core/Container'


const sectionName = ({ title }) => {
    return (
        <div className={styles.container}>
            <Container className={styles.text}>
                {title}
            </Container>
        </div>
    )
}

export default sectionName
