import React,{ useState, useEffect } from 'react'
import styles from './HomePage.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'
import Spinner from '../Spinner/Spinner'

export default function HomePage() {
    const serverUrl = useSelector(state => state.serverUrl)
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        let { data } = await axios.get(`${serverUrl}/api/products`);
        console.log(data);
        setProducts(data.products);
        setLoading(false);
    }

    useEffect(()=> {
        getProducts()
    },[])

    if(loading) return <Spinner/>

    return (
        <div className={styles.products}>
            {products.map((product,index) => <Product key={index} product={product}/>)}
        </div>
    )
}
