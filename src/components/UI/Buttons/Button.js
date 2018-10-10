import React from 'react';
import './Button.scss';
import {Link} from 'react-router-dom';

const button=(props)=>{
    let btn= props.type==="danger" ? <Link to={props.link} className={props.btnType} data-wipe-danger={props.wipe}>{props.children}</Link> : <Link to={props.link} className={props.btnType} data-wipe={props.wipe}>{props.children}</Link>;

    return(
        btn
       
    )
}

export default button;