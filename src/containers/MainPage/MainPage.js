import React,{Component} from 'react';
import Aux from '../../huc/Auxilary';   
import DemoCarousel from '../Carousel/DemoCarousel';  
//import Button from '../../components/UI/Buttons/ButtonsLink/ButtonsLink';    
//import {withRouter} from 'react-router-dom';      
import Section from '../Section/Section';
import NavigationSection from '../../components/Navigation/NavigationSection/NavigationSection';
import NavigationPrice from '../../components/Navigation/NavigationPrice/NavigationPrice';


class MainPage extends Component{
  

    render()
    {
        
        return(
            <Aux>   
                <DemoCarousel/>
                <NavigationPrice/>
                 <Section>
                     <NavigationSection clicked={()=>this.navigationClickedHandler()}/>
                      
                 </Section>
            </Aux>
        )
    }
}


export default MainPage;