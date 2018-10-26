import React,{Component} from 'react';
import './NavigationPrice.css';

import NavigationPriceItem from '../NavigationPrice/NavigationPriceItems/NavigationPriceItem/NavigationPriceItem';

class NavigationPrice extends Component{

    state={
        renovate:false,
        underconstruction:false
    }
 
    switchRenovateClickHandler=()=>{
        this.setState(prevState => {
            return {renovate: !prevState.renovate};
        });
    }
    swithcUnderConstructionHandler=()=>{
        this.setState(prevState => {
            return {underconstruction: !prevState.underconstruction};
        });  
    }
    render(){
        
    return(
        <ul className="NavigationPrice">
            <NavigationPriceItem  clicked={this.switchRenovateClickHandler}>{!this.state.renovate ? 'RENOVATE -YOU NEED CALCULATION' : 'RECEIVE YOUR CALACULATION'}</NavigationPriceItem>
            <NavigationPriceItem  clicked={this.swithcUnderConstructionHandler}>{!this.state.underconstruction ? "YOU'RE UNDER CONSTRUCTION -YOU NEED CALCULATION": "RECIVE YOUR CALCULATION"}</NavigationPriceItem>
        </ul>
    )
}
}

export default NavigationPrice;