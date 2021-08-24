import React from 'react'
import spinner from '../../images/loading.gif'
import styles from './Spinner.module.css'

export default function Spinner() {
    return (
        <div className={styles.spinnercontainer}>
            <img src={spinner} alt="Loading gif" className={styles.spinner} />
        </div>
    )
}
