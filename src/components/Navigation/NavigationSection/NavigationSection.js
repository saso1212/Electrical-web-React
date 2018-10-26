import React from 'react';
import './NavigationSection.css';
//import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import NavigationSections from './NavigationSections/NavigationSections';
//import {withRouter} from 'react-router-dom';


const navigationSection=(props)=>{
    return(
            <ul className="NavigationSection">
               <NavigationSections clicked={props.clicked_electrical} lable="elecrtrical-instalation">ELECTRICAL INSTALATIONS</NavigationSections>
               <NavigationSections clicked={props.clicked_lighting} lable='lighting'>LIGHTING</NavigationSections>
               <NavigationSections clicked={props.clicked_networks} lable='computer-networks'>COMPUTER NETWORKS</NavigationSections>
               <NavigationSections clicked={props.clicked_automation} lable='automation-sysytems'>AUTOMATION SYSYTEMS</NavigationSections>
               <NavigationSections clicked={props.clicked_enterteinmant} lable='enterteinmant-systems'>ENTERTEINMANET SYSYTEMS</NavigationSections>
               <NavigationSections clicked={props.clicked_vide} lable='video-survelliance'>VIDEO SURVELLIANCE</NavigationSections>
               <NavigationSections clicked={props.clicked_allarm} lable='allarm-systems'>ALLARM SYSYTEMS</NavigationSections>
            </ul>
    )
}

export default navigationSection;