import React from 'react'
import styles from './Product.module.css'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
    return (
        <Link to={`/product/${product._id}`} className={styles.removeUnderline}>

            <div className={styles.product}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.imagec}><img src={product.image} alt="Product" className={styles.image}/></div>
                <div className={styles.price}>${product.price}</div>
            </div>
        </Link>
    )
}
