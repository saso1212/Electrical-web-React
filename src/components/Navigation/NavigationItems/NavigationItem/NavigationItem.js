import React from 'react';
import { NavLink } from 'react-router-dom';   
import './NavigationItem.css';  

const navigationItem=(props)=>{
    return(
        <li className={props.navClass}>
            <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={props.activeClass}>{props.children}</NavLink>
        </li>
    )
}

export default navigationItem;