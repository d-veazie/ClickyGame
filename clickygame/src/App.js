import React, {Component} from 'react';

import './App.css';
import Wrapper from "./components/wrapper/Wrapper";
import WhiskeyCard from "./components/cards/Card";
import options from "../src/options.json";
import Header from "./components/header/Header";



class App extends Component {
  state = {
    options,
    score: 0,
    highscore: 0,
    gameOver: false,
    clicked: []
  }

  // function gameOver() {
  //   this.setState({
  //     score: 0,
  //     gameOver: true

  //   })
  // };

  counter = id => {

    if(this.state.clicked.includes(id)) { 
      // game over function

    } else {
      let arr = this.state.clicked;
      arr.push(id)
      this.state.options.sort(() => 0.5 - Math.random());
      this.setState({
        clicked: arr,
        score: this.state.score + 1
      })
    }

    console.log("function running")

    
  }

  // handleIncrement = () => {
  //   this.setState({score: this.state.score + 1});
  // };

  render() {
    return (
      <Wrapper>
        <Header title={"Whiskey"} score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.options.map(option => (
          <WhiskeyCard 
            counter={this.counter}
            key={option.id}
            id={option.id}
            image={option.image}
          />
        ))}
      </Wrapper>
    );
   }
};





export default App;
