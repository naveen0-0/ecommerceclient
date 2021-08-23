import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

export default function NewProduct() {
    const { loggedIn, username } = useSelector(state => state.auth);
    const serverUrl = useSelector(state => state.serverUrl);

    if(!loggedIn && username !== 'admin') return <Redirect to="/"/>

    return (
        <div>
            NewProduct
        </div>
    )
}
