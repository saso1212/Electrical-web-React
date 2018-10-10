import React from 'react';
import './Button.scss'

const button=(props)=>{
    let btn= props.type==="danger" ? <a href={props.link} className={props.btnType} data-wipe-danger={props.wipe}>{props.children}</a> : <a href={props.link} className={props.btnType} data-wipe={props.wipe}>{props.children}</a>;

    return(
        btn
       
    )
}

export default button;