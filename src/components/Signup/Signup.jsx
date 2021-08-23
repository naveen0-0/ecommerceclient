import React,{ useState } from 'react'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Signup() {
    const { loggedIn } = useSelector(state => state.auth )
    const serverUrl = useSelector(state => state.serverUrl)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")


    const signUpSubmit = async e => {
        e.preventDefault();
        let { data } = await axios.post(`${serverUrl}/auth/signup`,{ username, email, password })
        setMsg(data.msg)
        if(data.statusload){
            setTimeout(()=>{
                return <Redirect to="/login"/>
            },2000)
        }
    }

    if(loggedIn) return <Redirect to="/"/>

    return (
        <div className={styles.container}>
            <div className={styles.signupform}>
                <div className={styles.title}>Create Account</div>

                <div className={styles.msg}>{msg}</div>

                <form onSubmit={signUpSubmit} className={styles.form}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Enter your name" className={styles.username}/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" className={styles.email}/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" className={styles.password}/>
                    <input type="submit" value="Signup" className={styles.submit}/>
                </form>

                <div className={styles.helpertext}>
                    <div className={styles.already}>Already have an account?</div>
                    <div className={styles.signin}>
                        <Link to="/login" className={styles.removeUnderline}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
