import React,{ useState } from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function Login() {
    const dispatch = useDispatch()
    const { loggedIn } = useSelector(state => state.auth)
    const serverUrl = useSelector(state => state.serverUrl)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [msg,setMsg] = useState("")


    const loginUpSubmit = async e => {
        e.preventDefault();
        let { data } = await axios.post(`${serverUrl}/auth/login`,{ username, password })
        setMsg(data.msg)
        if(data.statusload){
            localStorage.setItem('shoplogintoken',data.token)
            dispatch({type:"UPDATE_USER",payload:data.user})
        }
    }

    if(loggedIn) return <Redirect to="/"/>

    return (
        <div className={styles.container}>
            <div className={styles.loginform}>
                <div className={styles.title}>Login</div>

                <div className={styles.msg}>{msg}</div>

                <form onSubmit={loginUpSubmit} className={styles.form}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Enter your name" className={styles.username}/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" className={styles.password}/>
                    <input type="submit" value="Login" className={styles.submit}/>
                </form>

                <div className={styles.helpertext}>
                    <div className={styles.already}>Don't have an account?</div>
                    <div className={styles.signin}>
                        <Link to="/signup" className={styles.removeUnderline}>Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
