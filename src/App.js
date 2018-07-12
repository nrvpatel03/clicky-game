import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import hedgehog from "./hedgehog.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    hedgehog,
    score: 0
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header
        title="This is my Header"
        score={"Current Score " + this.state.score}
        />
        {this.state.hedgehog.map(hedge => (
          <FriendCard
            id={hedge.id}
            key={hedge.id}
            image={hedge.image}
            name={hedge.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
