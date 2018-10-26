import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from '../src/containers/Layout/Layout';
import Carousel from '../src/containers/Carousel/Carousel';
import {Route,Switch,withRouter} from 'react-router-dom';
import LoginData from './containers/LoginData/LoginData';
//import DemoCarousel from './containers/Carousel/DemoCarousel';
import MainPage from '../src/containers/MainPage/MainPage';


class App extends Component {
  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Switch>
       <Layout>
         <Route path="/login" exact component={LoginData}/>
         <Route path="/" exact component={Carousel} />
         <Route path="/carousel"  component={MainPage}/>
       </Layout>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
