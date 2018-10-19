import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


const navigationItems=()=>{
    return(
        <ul className="NavigationItems">
            <NavigationItem navClass="NavigationItem" link="/" exact>HOME</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/carousel" >ABOUTH AS</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/contact" >CONTACT AS</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/login" >LOGIN</NavigationItem>
        </ul>
    )
}      

export default navigationItems;