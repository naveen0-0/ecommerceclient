import React,{ useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import NewProduct from './components/NewProduct/NewProduct';

function App() {
  const dispatch = useDispatch()
  const serverUrl = useSelector(state => state.serverUrl)

  const getUser = async () => {
    const { data } = await axios.get(`${serverUrl}/auth/getuser`,{ headers : { Authorization : localStorage.getItem('shoplogintoken')}});
    if(data.statusload){
        dispatch({type:"UPDATE_USER",payload:data.user})
    }
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/newproduct" exact component={NewProduct}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
