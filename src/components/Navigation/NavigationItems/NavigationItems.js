import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


const navigationItems=()=>{
    return(
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>HOME</NavigationItem>
            <NavigationItem link="/abouth" >ABOUTH AS</NavigationItem>
            <NavigationItem link="/contact" >CONTACT AS</NavigationItem>
            <NavigationItem link="/login" >LOGIN</NavigationItem>
        </ul>
    )
}      

export default navigationItems;