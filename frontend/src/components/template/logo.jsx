import React from 'react'
import './logo.css'
import logo from '../../assets/imgs/react.png'

import { Link } from 'react-router-dom' 

export default props =>
    <aside className="logo">        
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>