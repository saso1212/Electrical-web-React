import React ,{Component} from 'react';
import './Layout.css';
import Aux from '../../huc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Button from '../../components/UI/Buttons/Button';

class Layout extends Component{
    render(){
        return(
            <Aux>
                <Toolbar/>
             <main>
                {this.props.children}
            </main>
            <Button link="#" wipe="CONTACT ME">CONTACT ME</Button>
            </Aux>
           
        )
    }
}

export default Layout;