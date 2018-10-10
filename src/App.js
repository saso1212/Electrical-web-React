import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from '../src/containers/Layout/Layout';
import Carousel from '../src/containers/Carousel/Carousel';
import {Route,Switch} from 'react-router-dom'


class App extends Component {

 
  render() {
    return (
      <div>
        <Layout>
          <Carousel/>
        </Layout>
      </div>
    );
  }
}

export default App;
