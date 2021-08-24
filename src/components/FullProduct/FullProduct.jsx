import React,{ useEffect, useState } from 'react'
import styles from './FullProduct.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Spinner from '../Spinner/Spinner'

export default function FullProduct({ match }) {

    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const serverUrl = useSelector(state => state.serverUrl)
    
    const getProduct = async () => {
        let { data } = await axios.get(`${serverUrl}/api/product/${match.params.id}`)
        if(data.statusload){
            setProduct(data.product)
            setLoading(false)
        }
    }
    
    const AddToCart = () => {

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
            <button onClick={AddToCart} className={styles.cart}>Add to cart</button>
        </div>
    )
}
