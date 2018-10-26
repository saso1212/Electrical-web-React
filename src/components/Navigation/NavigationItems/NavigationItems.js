import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


const navigationItems=()=>{
    return(
        <ul className="NavigationItems">
            <NavigationItem navClass="NavigationItem" link="/" activeClass="NavigationItem active" exact>HOME</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/carousel" activeClass="NavigationItem active">ABOUTH AS</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/contact" activeClass="NavigationItem active" >CONTACT AS</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/login" activeClass="NavigationItem active" >LOGIN</NavigationItem>
        </ul>
    )
}      

export default navigationItems;