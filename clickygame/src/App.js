import React, {Component} from 'react';

import './App.css';
import Wrapper from "./components/wrapper/Wrapper";
import WhiskeyCard from "./components/cards/Card";
import options from "../src/options.json";
import Header from "./components/header/Header";

class App extends Component {
  state = {
    options
  }

  render() {
    return (
      <Wrapper>
        <Header>F*ckin Whiskey</Header>
        {this.state.options.map(options => (
          <WhiskeyCard
            id={options.id}
            image={options.image}
          />
        ))}
      </Wrapper>
    );
   }
};





export default App;
