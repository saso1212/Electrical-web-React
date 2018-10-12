import React from 'react';
import './NavigationSection.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


const navigationSection=(props)=>{
    return(
        <nav className="NavigationSection">
            <ul className="NavigationSectionItems">
            <NavigationItem navClass="NavigationItem" link="" exact>RENOVIRATE VI TREBA PONUDA</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/" >GRADITE KUKA VI TREBA PONUDA</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/" >IMATE PROBLEM SO INSTALACIJA</NavigationItem>
            <NavigationItem navClass="NavigationItem" link="/" >LOGIN</NavigationItem>
            </ul>
        </nav>
    )
}

export default navigationSection;