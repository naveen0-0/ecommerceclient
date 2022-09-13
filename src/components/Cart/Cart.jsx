import React from 'react'
import styles from './Cart.module.css'
import CartProduct from '../CartProduct/CartProduct'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Cart() {

    const cartProducts = useSelector(state => state.cart)
    const { loggedIn } = useSelector(state => state.auth)
    if(!loggedIn) return <Redirect to="/"/>
    return (
        <div className={styles.container}>
            <div className={styles.title}>Cart</div>
            <div className={styles.cartproducts}>
                {cartProducts.map((cartProduct,index) => <CartProduct key={index} cartProduct={cartProduct}/>)}
            </div>
        </div>
    )
}
