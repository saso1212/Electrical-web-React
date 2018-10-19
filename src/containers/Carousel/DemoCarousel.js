import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import albania from '../../assets/images/albania-bay-beach-188029.jpg';
import beach from '../../assets/images/bay-beach-beautiful-208340.jpg';
import lights from '../../assets/images/picture1.jpg';
import instalations from '../../assets/images/picture2.jpg';
import bulbs from '../../assets/images/picture5.jpg';

import './DemoCoursel.css'


class DemoCarousel extends Component {
    render() {
        return (
            <div className="DemoCoursel">
             <Carousel    autoPlay interval={3000} dynamicHeight
             infiniteLoop showThumbs={false} showStatus={true} showIndicators={true} >
                <div>
                    <img src={bulbs} style={{height:"650px"}} alt="Album three" />
                    <p className="legend">Legend 1</p>
                </div>
                <div >
                    <img src={beach} style={{height:"650px"}} alt="Album three" />
                    <p className="legend">Legend 2</p>
                </div>
                <div  >
                    <img src={lights} style={{height:"650px"}} alt="Album three"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div >
                    <img src={instalations} style={{height:"650px"}} alt="Album three"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        );
    }
};


export default DemoCarousel;