import React ,{Component} from 'react';
import './Layout.css';
import Aux from '../../huc/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
//import Section from '../Section/Section';
import Social from '../../components/Social/Social';
//import Button from '../../components/UI/Buttons/Button';
//import LoginData from '../LoginData/LoginData'
import likedin from '../../assets/images/linkdin.png';
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png';
import facebook from '../../assets/images/facebook.png';
import Footer from '../../components/UI/Footer/Footer';
//import Button from "../../components/UI/Buttons/ButtonsLink/ButtonsLink";





class Layout extends Component{
    state={
        showSection:false
    }
    render(){
        return(
            <Aux>
                <Toolbar/>
                <Social>
                   <a href="https://www.linkedin.com/m/login/"><img src={likedin} alt="Linkdin" /></a>
                   <a href="https://www.linkedin.com/m/login/"> <img src={twitter} alt="Twiter"/></a>
                   <a href="https://www.linkedin.com/m/login/">  <img src={youtube} alt="Youtube"/></a>
                   <a href="https://www.linkedin.com/m/login/"> <img src={facebook} alt="Facebook"/></a>
                </Social>
             <main>
                {this.props.children}
            </main>
            <Footer/>            
            </Aux>
           
        )
    }
}

export default Layout;