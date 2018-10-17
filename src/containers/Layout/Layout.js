import React ,{Component} from 'react';
import './Layout.css';
import Aux from '../../huc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Section from '../Section/Section';
//import LoginData from '../LoginData/LoginData'


class Layout extends Component{
    state={
        showSection:false
    }
    render(){
        return(
            <Aux>
                <Toolbar/>
             <main>
                {this.props.children}
            </main>
            {this.state.showSection ? <Section/> :null}
            </Aux>
           
        )
    }
}

export default Layout;