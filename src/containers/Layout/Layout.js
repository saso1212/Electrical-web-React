import React ,{Component} from 'react';
import './Layout.css';
import Aux from '../../huc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
//import Section from '../Section/Section';
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
<<<<<<< HEAD
            {this.state.showSection ? <Section/> :null}
=======
       
>>>>>>> 315ecfb1e7029890ced00f342025cb7f275a5a9d
            </Aux>
           
        )
    }
}

export default Layout;