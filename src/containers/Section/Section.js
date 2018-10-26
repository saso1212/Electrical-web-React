import React ,{Component} from 'react';
import './Section.css';
import NavigationSections from '../../components/Navigation/NavigationSection/NavigationSections/NavigationSections';
import * as actionCreators from '../../store/actions/index';
import {connect} from 'react-redux';



class Section extends Component{
  
     feadeEfect=()=>{
        setTimeout(()=>{
            this.setState({show:true})
        },400)
     }
 
    render(){
    

        return(
            <div className="Section">
                <div className="Navigation">
                <ul className="NavigationSection">
                  <NavigationSections clicked={this.props.onFadeInstalation} activeClass={this.props.activeClass.instalation ||this.props.mainClass}>ELECTRICAL INSTALATIONS</NavigationSections>
                  <NavigationSections clicked={this.props.onFadeLighting} activeClass={this.props.activeClass.lighting} >LIGHTING</NavigationSections>
                  <NavigationSections clicked={this.props.onFadeAutomation} activeClass={this.props.activeClass.automation} >AUTOMATION SYSYTEMS</NavigationSections>
                  <NavigationSections clicked={this.props.onFadeEnetrteinmant} activeClass={this.props.activeClass.enterteinmant} >ENTERTEINMANET SYSYTEMS</NavigationSections>
                  <NavigationSections clicked={this.props.onFadeVideo} activeClass={this.props.activeClass.video} >VIDEO SURVELLIANCE</NavigationSections>
                  <NavigationSections clicked={this.props.onFadeAlarm} activeClass={this.props.activeClass.alarm}>ALLARM SYSYTEMS</NavigationSections>
                  <NavigationSections clicked={this.props.onFadeNetwork} activeClass={this.props.activeClass.networks}>NETWORK SYSYTEMS</NavigationSections>
              </ul>
                 </div>
                 <div className="TextContainer" style={{ 
                     transform:  this.props.show || this.props.firstPageShow ? 'translateX(0)' : 'translateX(100vw)',
                     opacity:  this.props.show || this.props.firstPageShow ? '1' : '0'}}>
                    {this.props.firstPageShow ? "ELECTRICAL INSTALLATIONS: DESIGN AND EXECUTION OF ELECTRICAL INSTALLATIONS IN INDUSTRIAL, BUSINESS AND RESIDENTIAL OBJECTS APPLICABLE TO THE HIGHEST STANDARDS AND QUALITY. PROVISION OF HIGH AND LOW STRUCTURAL INSTALLATIONS ACCORDING TO YOUR NEEDS AND REQUIREMENTS." 
                    : this.props.data }
                </div>
            </div>
        )
    }

}

const mapStateToProps=state=>{
    return {
        data:state.description.data,
        activeClass:state.description.class,
        show:state.description.show,
        mainClass:state.description.mainClass,
        firstPageShow:state.description.firstPageShow
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onFadeLighting:()=>dispatch(actionCreators.fadeDescriptionLighting()),
        onFadeInstalation:()=>dispatch(actionCreators.fadeDescriptionInstalation()),
        onFadeNetwork:()=>dispatch(actionCreators.fadeDescriptionNetworks()),
        onFadeVideo:()=>dispatch(actionCreators.fadeDescriptionVideo()),
        onFadeAutomation:()=>dispatch(actionCreators.fadeDescriptionAutomation()),
        onFadeEnetrteinmant:()=>dispatch(actionCreators.fadeDescriptionEnterteinmant()),
        onFadeAlarm:()=>dispatch(actionCreators.fadeDescriptionAlarm())
       // onDataLighting:()=>dispatch(actionCreators.decriptionLighting()),
      //  onDataInstalation:()=>dispatch(actionCreators.decriptionInstalation()),
       // onDataNetworks:()=>dispatch(actionCreators.decriptionNetworks()),
       // onDataVideo:()=>dispatch(actionCreators.decriptionVideo()),
     //   onDataAutomation:()=>dispatch(actionCreators.decriptionAutomation()),
        //onDataEnterteinmant:()=>dispatch(actionCreators.decriptionEnterteinmant()),
       // onDataAlarm:()=>dispatch(actionCreators.decriptionAlarm())
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Section);