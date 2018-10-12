import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from '../src/containers/Layout/Layout';
import Carousel from '../src/containers/Carousel/Carousel';
import {Route,Switch} from 'react-router-dom';
import LoginData from './containers/LoginData/LoginData';


class App extends Component {

 
  render() {
    return (
      <div>
        <Switch>
       <Layout>
       <Route path="/login" component={LoginData}/>
        <Route path="/" exact component={Carousel} />
       </Layout>
        </Switch>
     
       
      
        
      </div>
    );
  }
}

export default App;
