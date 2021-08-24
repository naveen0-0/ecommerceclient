import React, { useState } from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { AiOutlineShoppingCart,AiOutlineUser,AiFillFileAdd,AiOutlineLogout } from 'react-icons/ai'

export default function NavBar() {
    const dispatch = useDispatch()
    const [openprofiledropdown, setOpenProfileDropDown] = useState(false)

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

            {loggedIn?(
                <div className={styles.links}>
                    
                    <div className={styles.cart}>
                        <Link to="/cart" className={styles.removeUnderline}>
                            <AiOutlineShoppingCart size={30}/>
                        </Link>
                    </div>     

                    <div className={styles.profile} onClick={()=> setOpenProfileDropDown(!openprofiledropdown)}>
                        <AiOutlineUser size={30}/>

                        {/* fgfg */}
                        <div className={styles.profiledropdown} style={openprofiledropdown?{display:'flex'}:{display:'none'}}>
                            {username ==='admin' && (
                                <div className={styles.addproduct}>
                                    <Link to="/newproduct" className={styles.removeUnderline}>
                                        Add product
                                    </Link>
                                </div>
                            )}

                            <div className={styles.logout} onClick={Logout}>
                                logout
                            </div>
                        </div>


                    </div>            
                </div>
            ):(
                <div className={styles.links}>
                    <div className={styles.profile} onClick={()=> setOpenProfileDropDown(!openprofiledropdown)}>
                        <AiOutlineUser size={30}/>

                        <div className={styles.profiledropdown} style={openprofiledropdown?{display:'flex'}:{display:'none'}}>

                                <div className={styles.addproduct}>
                                    <Link to="/signup" className={styles.removeUnderline}>
                                        signup
                                    </Link>
                                </div>
                            <div className={styles.logout}>
                                <Link to="/login" className={styles.removeUnderline}>
                                    login
                                </Link>
                            </div>
                        </div>
                    </div>     
                </div>
            )}
        </div>
    )
}


//          electronics
//          jewelery
//          men clothing
//          women clothing