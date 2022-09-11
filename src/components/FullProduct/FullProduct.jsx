import React,{ useEffect, useState } from 'react'
import styles from './FullProduct.module.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../Spinner/Spinner'

export default function FullProduct({ match }) {
    const dispatch = useDispatch();
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const serverUrl = useSelector(state => state.serverUrl)
    const { loggedIn } = useSelector(state => state.auth)

    const getProduct = async () => {
        let { data } = await axios.get(`${serverUrl}/api/product/${match.params.id}`)
        if(data.statusload){
            setProduct(data.product)
            setLoading(false)
        }
    }
    
    const AddToCart = async (id) => {
        let { data } = await axios.post(`${serverUrl}/api/cart/add`,{ productId : id },{ headers : { Authorization : localStorage.getItem('shoplogintoken')}})
        dispatch({ type : "UPDATE_CART",payload:data.cart})
    }
    
    useEffect(()=>{
        getProduct()
    },[match.params.id])

    if(loading) return <Spinner/>

    return (
        <div className={styles.product}>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.imagec}><img src={product.image} alt="Product IMage" className={styles.image}/></div>
            <div className={styles.price}>${product.price}</div>
            <div className={styles.category}>{product.category}</div>
            <div className={styles.description}>{product.description}</div>
            {loggedIn && <button onClick={()=> AddToCart(match.params.id)} className={styles.cart}>Add to cart</button>}

        </div>
    )
}
