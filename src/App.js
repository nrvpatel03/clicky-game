import React, { Component } from "react";
import HedgeHogCard from "./components/HedgeHogCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import hedgehog from "./hedgehog.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    header: "Click to start Game",
    hedgehog,
    score: 0
  };

  clickFunction = () => {
    var tf = Math.round(Math.random());
    if(tf){
      this.setState({score: this.state.score + 1,
      header: "You guessed Correctly"});
    }else{
      this.setState({header: "You guest Incorrectly"});
    }
    this.setState({hedgehog: this.shuffleArr(this.state.hedgehog)});
  }

  shuffleArr = (hedgeArr) => {
    var currentIndex = hedgeArr.length;
    var temporaryValue;
    var randomIndex;
    while (0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = hedgeArr[currentIndex];
      hedgeArr[currentIndex] = hedgeArr[randomIndex];
      hedgeArr[randomIndex] = temporaryValue;
    }
    return hedgeArr;
  }


  render() {
    return (
      <Wrapper>
        <Header
        title={this.state.header}
        score={"Current Score " + this.state.score}
        />
        {this.state.hedgehog.map(hedge => (
          <HedgeHogCard
            id={hedge.id}
            key={hedge.id}
            image={hedge.image}
            name={hedge.name}
            clickFunc={this.clickFunction}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
