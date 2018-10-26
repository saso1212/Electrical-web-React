import React from 'react';
import './NavigationSections.css';


const navigationSections=(props)=>{
    let navClass=['NavigationItemSection',props.class];
    let spanClass=[props.activeClass];

    return(
        <li className={navClass.join(" ")} lable={props.lable} onClick={props.clicked}>
            <span className={spanClass}>{props.children}</span>
        </li>
    )
}

export default navigationSections;