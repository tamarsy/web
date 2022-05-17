
import React from "react"
import './App.css';
import Title from "./components/title"
import AddPlayers from "./components/addPlayers"


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPlayer: 0,
      players: [],
      isPlay: 0
    }
  }

  changeNumber = (newNumber) => {
    const allPlayers = this.state.players;
    const player = this.state.currentPlayer;

    if (newNumber === "change") {
      let index = Math.floor(Math.random() * (allPlayers.length));
      while(index === player && allPlayers.length > 2){
        index = Math.floor(Math.random() * (allPlayers.length));
      }
      newNumber = allPlayers[index].currentNumber;
      allPlayers[index].currentNumber = allPlayers[player].currentNumber;
    }
    
    allPlayers[player].currentNumber = newNumber;
    allPlayers[player].currentSteps +=1;
    const addCurrentPlayer = (player + 1) % allPlayers.length;
    
    // window.scrollTo(0, allPlayers[player].name);
    this.setState({players:allPlayers});
    this.setState({currentPlayer:addCurrentPlayer});
  }

  setIsPlay = (n) => {
    this.setState({ isPlay: n });
  }

  setPlayer = (name, currentNumber, currentScores, currentSteps) => {
    const playerArr = this.state.players;
    for (let i = 0; i < playerArr.length; ++i) {
      if (playerArr[i].name === name) {
        alert("this name is already exists!");
        return;
      }
    }

    const myUser = {
      name,
      currentNumber,
      currentScores,
      currentSteps,
      massage:"be smart🧐❗",
    }

    playerArr.push(myUser);
    this.setState({ players: playerArr })
  }

  newNumbers = ()=>{
    const players = this.state.players;
    for (let i = 0; i < players.length; ++i) {
      players[i].currentNumber = Math.floor(Math.random() * 100);
      players[i].currentSteps = 0;
    }
    this.setState( {players:players} );
    this.setState( {isPlay:0} );
    this.setState( {currentPlayer:0} );
  }

  newGame = ()=>{
    const allPlayers = this.state.players;
    allPlayers[this.state.currentPlayer].currentSteps = 0;
    allPlayers[this.state.currentPlayer].massage = "new game!!!😛";
    allPlayers[this.state.currentPlayer].currentNumber = Math.floor(Math.random() * 100);
    this.setState({players:allPlayers});
  }

  outOfGame = ()=>{
    const players = this.state.players;
    players.splice(this.state.currentPlayer, 1);
    this.setState({players}); this.setState({currentPlayer:this.state.currentPlayer});
  }

  setMassage = (newMassage)=>{
    const allPlayers = this.state.players
    allPlayers[this.state.currentPlayer].massage = newMassage;
    this.setState({players:allPlayers})
  }

  render() {
    return (
      <div className="App">
        <Title setPlayer={this.setPlayer} setIsPlay={this.setIsPlay} isPlay={this.state.isPlay} newNumbers={this.newNumbers} />
        <AddPlayers players={this.state.players} changeNumber={this.changeNumber} newGame={this.newGame}
          outOfGame={this.outOfGame} currentPlayer={this.state.currentPlayer}
          isPlay={this.state.isPlay} setMassage={this.setMassage}/>
      </div>
    );
  }
}


export default App;
