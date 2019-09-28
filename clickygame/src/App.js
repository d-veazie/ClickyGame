import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper"
import WhiskeyCard from "./components/cards"
import options from "../src/options.json"

class App extends Component {
  state = {
    options
  }

  render() {
    return (
      <Wrapper>
        <Title>F*ckin Whiskey</Title>
        {this.state.options.map(options => (
          <FriendCard
            id={options.id}
            image={options.image}
          />
        ))}
      </Wrapper>
    );
   }
};





export default App;
