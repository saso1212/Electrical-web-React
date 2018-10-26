import React from 'react';
import './NavigationPriceItem.css';


const navigationPriceItem=(props)=>{
    let navClass=['NavigationPriceItem'];
    let spanClass=[props.activeClass];

    return(
        <li className={navClass.join(" ")} lable={props.lable} onClick={props.clicked}>
            <span className={spanClass}>{props.children}</span>
        </li>
    )
}

export default navigationPriceItem;