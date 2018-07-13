import React, { Component } from "react";
import HedgeHogCard from "./components/HedgeHogCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import hedgehog from "./hedgehog.json";
import "./App.css";

class App extends Component {
  state = {
    header: "Click to start Game",
    hedgehog,
    score: 0,
  };
//memory game, see what characters user remembers clicking.
  clickFunction = event => {
    let value = event.target.getAttribute("value");
    let id = event.target.id;
    let gamewin = this.state.score;
    if(value == 0){
      this.setState({score: this.state.score + 1, header: "You guessed Correctly", hedgehog: this.setOneTrue(this.state.hedgehog,id)});
      console.log("gameWin" + gamewin);
      if(gamewin === 9){
        this.setState({header: "You Win the Game! New Game Loading..."});
        setTimeout(function(){
          window.location.reload(true);
        }, 2000);
      }
    }else{
      this.setState({score: 0, header: "You guest Incorrectly. Please Play again", hedgehog: this.setAllClickyFalse(this.state.hedgehog)});
      console.log(this.state.hedgehog);
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
  setOneTrue = (hedgeArr, targId) =>{
    let index = hedgeArr.map(x => x.id).indexOf(parseInt(targId))
    console.log(index);
    hedgeArr[index].value = 1;
    return hedgeArr;
  }
  setAllClickyFalse = (hedgeArr) =>{
    for(var i = 0; i<hedgeArr.length; i++){
      hedgeArr[i].value = 0;
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
            value={hedge.value}
            clickFunc={(e) => this.clickFunction(e)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
