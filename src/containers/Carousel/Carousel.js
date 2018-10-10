import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import albania from '../../assets/images/albania-bay-beach-188029.jpg';
import beach from '../../assets/images/bay-beach-beautiful-208340.jpg';


class Container extends Component {
 

state = {
      active: 0
    };
  
  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }

  render() {
    return (
      <div>
        
        <Coverflow
          width={1060}
          height={480}
          displayQuantityOfSide={1.8}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
           // onClick={() => fn()}
           // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
          </div>
          <img src={albania} alt='Album three' data-action="/user" target="_blank"/>
          <img src={beach} alt='Album two' data-action="http://passer.cc" target="_blank"/>
          <img src={albania} alt='Album three' data-action="https://doce.cc/" target="_blank"/>
          <img src={albania} alt='Album two' data-action="http://passer.cc"/>
          <img src={albania} alt='Album three' data-action="https://doce.cc/"/>
          <img src={albania} alt='Album two' data-action="http://passer.cc"/>
          <img src={albania} alt='Album three' data-action="https://doce.cc/"/>
          <img src={albania} alt='Album two' data-action="http://passer.cc"/>
          <img src={albania} alt='Album three' data-action="https://doce.cc/"/>
        </Coverflow>
      </div>
    );
  }
}


export default  Container;