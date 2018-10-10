import React from 'react';
import './Logo.css'
import {Link} from 'react-router-dom';


import burgerLogo from '../../assets/images/burger-logo.png';

const logo=(props)=>{
    return(
      
        <div className="Logo" style={{height: props.height}}>
          <Link to="/">
          <img src={burgerLogo} alt="MyBurger" />
          </Link>
        
      </div>
    )
}

export default logo;
