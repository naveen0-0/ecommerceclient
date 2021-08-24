import React,{ useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import styles from './NewProduct.module.css'

export default function NewProduct() {
    const { loggedIn, username } = useSelector(state => state.auth);
    const serverUrl = useSelector(state => state.serverUrl);

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [msg, setMsg] = useState("")

    const AddNewProduct = async e => {
        e.preventDefault()
        setMsg("")
        let { data } = await axios.post(`${serverUrl}/api/newproduct`,{ title, price, description, category, image }, { headers : { Authorization:localStorage.getItem('shoplogintoken')}})
        if(data.statusload){
            setMsg(data.msg)
        }
    }

    if(!loggedIn && username !== 'admin') return <Redirect to="/"/>

    return (
        <div className={styles.container}>
            <div className={styles.head}>Add a new product</div>
            <div className={styles.msg}>{msg}</div>
            <form className={styles.form} onSubmit={AddNewProduct}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Add the title" className={styles.title} required/>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Add the price" className={styles.price} required/>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Add the description" className={styles.description} required/>
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Add the category" className={styles.category} required/>
                <input type="text" value={image} onChange={e => setImage(e.target.value)} placeholder="Add the image" className={styles.image} required/>
                <input type="submit" value="Add" className={styles.submit}/>
            </form>
        </div>
    )
}
