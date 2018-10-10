import React from 'react';
import './Button.scss'

const button=(props)=>{
    return(
        <a href={props.link} className="btn" data-wipe={props.wipe}>{props.children}</a>
    )
}

export default button;