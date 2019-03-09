import React from 'react';
import './App.css';
import Header from "./header.js";
import Game from "./game.js";
import GameCard from "./card.js";
import dinosaurs from "./dinosaurs.json";


class App extends React.Component {
  state = {
    dinosaurs: dinosaurs,
    score: 0,
    highscore: 0
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    console.log(this.state.dinosaurs);
    return (
      <Game>
        <Header>Dinosaur Clicky Game</Header>
        <GameCard
        />
        <div className="table">
        {this.state.dinosaurs.map((each, i) => (
          <div key={i} className="dinodiv" onClick={() => this.shuffleArray(this.state.dinosaurs)}>
            <img src={each.image} alt={""} width="200px" height="200px"/>
          </div>
        ))}
        </div>
      </Game>
    );
  }
}

export default App;