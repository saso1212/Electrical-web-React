import React ,{Component} from 'react';
import './Layout.css';
import Aux from '../../huc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
//import Section from '../Section/Section';
//import LoginData from '../LoginData/LoginData'


class Layout extends Component{
    render(){
        return(
            <Aux>
                <Toolbar/>
             <main>
                {this.props.children}
            </main>
       
            </Aux>
           
        )
    }
}

export default Layout;