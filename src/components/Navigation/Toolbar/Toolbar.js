import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../components/Logo/Logo';
import './Toolbar.css';

const toolbar=(props)=>{
    return(
    <header className="Toolbar">
         <div>
           <Logo  height="50px"/>
        </div>
         <nav className="DesktopOnly">
               <NavigationItems />
         </nav>      
    </header>
    )
}

export default toolbar;