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
import FullProduct from './components/FullProduct/FullProduct';
import Cart from './components/Cart/Cart'

function App() {
  const dispatch = useDispatch()
  const serverUrl = useSelector(state => state.serverUrl)

  const getUser = async () => {
    const { data } = await axios.get(`${serverUrl}/auth/getuser`,{ headers : { Authorization : localStorage.getItem('shoplogintoken')}});
    if(data.statusload){
        dispatch({type:"UPDATE_USER",payload:data.user})
    }
  }
  
  const getCart = async () => {
    const { data } = await axios.get(`${serverUrl}/auth/getcart`,{ headers : { Authorization : localStorage.getItem('shoplogintoken')}});
    if(data.statusload){
        dispatch({type:"UPDATE_CART",payload:data.cart})
    }
  }

  useEffect(()=>{
    getUser();
    getCart();
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
          <Route path="/product/:id" exact component={FullProduct}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
