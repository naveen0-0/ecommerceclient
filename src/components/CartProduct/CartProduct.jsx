import React,{ useEffect, useState } from 'react'
import styles from './CartProduct.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../Spinner/Spinner'

export default function CartProduct({ cartProduct }) {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const serverUrl = useSelector(state => state.serverUrl)
    const cart = useSelector(state => state.cart)

    const getCartProduct = async () => {
        let { data } = await axios.get(`${serverUrl}/api/product/${cartProduct.productId}`)
        if(data.statusload){
            setProduct(data.product)
            setLoading(false)
        }
    }

    const AddToCart = async (id) => {
        let { data } = await axios.post(`${serverUrl}/api/cart/add`,{ productId : id },{ headers : { Authorization : localStorage.getItem('shoplogintoken')}})
        dispatch({ type : "UPDATE_CART",payload:data.cart})
    }
    
    const RemoveFromCart = async id => {
        let { data } = await axios.post(`${serverUrl}/api/cart/remove`,{ productId : id },{ headers : { Authorization : localStorage.getItem('shoplogintoken')}})
        dispatch({ type : "UPDATE_CART",payload:data.cart})
    }

    const NameSake = (a,b) => {
        const result = a*b;
        return result.toFixed(2)
    }

    useEffect(()=>{
        getCartProduct()
    },[])

    if(loading) return <Spinner/>

    return (
        <div className={styles.cartProduct}>
            <div className={styles.imagec}>
                <img src={product.image} alt="Cart Product" className={styles.image}/>
            </div>

            <div className={styles.details}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>${product.price}</div>
                <div className={styles.addandremove}>
                    <div className={styles.add} onClick={() => RemoveFromCart(cartProduct.productId)}>-</div>
                    <div className={styles.noofProducts}>{cartProduct.noofProducts}</div>
                    <div className={styles.remove} onClick={() => AddToCart(cartProduct.productId)}>+</div>
                </div>
								<div className={styles.totalprice}>
										Price : ${product.price} * {cartProduct.noofProducts} = ${NameSake(product.price,cartProduct.noofProducts)}
								</div>
            </div>

        </div>
    )
}
