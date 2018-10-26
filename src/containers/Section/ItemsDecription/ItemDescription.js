import React,{Component} from 'react';
import './ItemDescription.css'
import {Route} from 'react-router-dom';

class ItemDescription extends Component{
    render(){
        return(
                <Route to={this.props.routePath} component={this.props.component}/>
        )
    }
}

export default ItemDescription;