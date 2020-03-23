import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import { Header, Footer, Featured, VunueNfo, Highlights, Pricing, Location } from './components/index';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo/>
        </Element>

        <Element name="highlights">
                   <Highlights/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Footer/>
      </div>
    );
  }
}

export default App;
