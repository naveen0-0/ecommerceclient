import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

export default function NavBar() {
    const dispatch = useDispatch()

    const { loggedIn, username } = useSelector(state => state.auth)

    const Logout = () => {
        localStorage.removeItem('shoplogintoken')
        dispatch({type:"UPDATE_USER",payload:{ username:"", email:"", loggedIn : false }})
    }

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <Link to="/" className={styles.removeUnderline}>Shopp</Link>
            </div>

            {loggedIn? (
                <div className={styles.auth}>
                    <div className={styles.signup} onClick={Logout}>
                        logout
                    </div>
                    {username === 'admin' && (
                        <Link to="/newproduct" className={styles.removeUnderline}>
                            <div className={styles.signup}>
                                addproduct
                            </div>
                        </Link>
                    )}
                </div>
            ) :(
                <div className={styles.auth}>
                    <Link to="/signup" className={styles.removeUnderline}>
                        <div className={styles.signup}>
                            signup
                        </div>
                    </Link>
                    <Link to="/login" className={styles.removeUnderline}>
                        <div className={styles.login}>
                            login
                        </div>
                    </Link>
                </div>
            )}
            
        </div>
    )
}


//          electronics
//          jewelery
//          men clothing
//          women clothing