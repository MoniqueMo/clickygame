import React, { Component } from 'react';
import Card from "./components/card"
import Container from "./components/container";
import Header from "./components/header";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  //set state to the cards json array
state = {
    cards,
    score: 0,
    topscore: 0
};

  gameOver = () => {
    if (this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score}, function(){
        console.log(this.state.highscore)
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`sorry...Game Over! \n score: ${this.state.score}`);
    this.setState({score:0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count ===0){
          cards[i].count = cards[i].count +1;
            this.setState({score: this.state.score+1}, function() {
              console.log(this.state.score)
            });
            this.state.cards.sort(() => Math.random() - 0.5)
            return true;
        }else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Container> 
      <Header score={this.state.score} topscore={this.state.topscore}>Nickelodeon Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card clickCount = {this.clickCount}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          />

        ))}
      </Container>
    );
  }
}

export default App;
