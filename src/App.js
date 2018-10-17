import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from '../src/containers/Layout/Layout';
import Carousel from '../src/containers/Carousel/Carousel';
import {Route,Switch} from 'react-router-dom';
import LoginData from './containers/LoginData/LoginData';
import DemoCarousel from './containers/Carousel/DemoCarousel';


class App extends Component {

 
  render() {
    return (
      <div>
        <Switch>
       <Layout>
         <Route path="/login" component={LoginData}/>
        <Route path="/" exact component={Carousel} />
        <Route path="/carousel" exact component={DemoCarousel}/>
       </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
