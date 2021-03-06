import React from 'react'
import styles from './Cart.module.css'
import CartProduct from '../CartProduct/CartProduct'
import { useSelector } from 'react-redux'

export default function Cart() {

    const cartProducts = useSelector(state => state.cart)
    return (
        <div className={styles.container}>
            <div className={styles.title}>Cart</div>
            <div className={styles.cartproducts}>
                {cartProducts.map((cartProduct,index) => <CartProduct key={index} cartProduct={cartProduct}/>)}
            </div>
        </div>
    )
}
