import React from 'react';
import './ButtonsLink.scss';
import {Link} from 'react-router-dom';

const buttonLink=(props)=>{
    let btn= props.type==="danger" ? <Link to={props.link} className={props.btnType} data-wipe-danger={props.wipe} onClick={props.cliked}>{props.children}</Link> : <Link to={props.link} className={props.btnType} data-wipe={props.wipe}>{props.children}</Link>;

    return(
        btn
       
    )
}

export default buttonLink;