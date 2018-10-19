import React from 'react';
import './Logo.css'
import {Link} from 'react-router-dom';


//import burgerLogo from '../../assets/images/burger-logo.png';
import Logo from '../../assets/images/Untitled.png';

const logo=(props)=>{
    return(
      
        <div className="Logo" style={{height: props.height}}>
          <Link to="/">
          <img src={Logo} alt="Create My Ideas" />
          </Link>
      </div>
    )
}

export default logo;
