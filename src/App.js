import React from 'react';
import './App.css';
import Character from "./Components/Characters"

class App extends React.Component {


state = {
  characterPhotos: [
    { source: "/photos/459574-smaug-the-dragon.jpg", clicked: false, key: 1},
    { source: "/photos/aragorn.png", clicked: false, key: 2},
    { source: "/photos/bilbo.jpg", clicked: false, key: 3},
    { source: "/photos/boromir.jpg", clicked: false, key: 4},
    { source: "/photos/celembrimbor.jpg", clicked: false, key: 5},
    { source: "/photos/faramir.jpg", clicked: false, key: 6},
    { source: "/photos/Frodo_Baggins.png", clicked: false, key: 7},
    { source: "/photos/merry.jpg", clicked: false, key: 8},
    { source: "/photos/ringwraith.jpg", clicked: false, key: 9},
    { source: "/photos/Sam-Gamgee.jpg", clicked: false, key: 10},
    { source: "/photos/sauron.jpg", clicked: false, key: 11},
    { source: "/photos/witchking.jpg", clicked: false, key: 12}
  ],
  score: 0,
  highScore: 0,
  comment: "To play, click the photos, but try not to click the same one twice!"
}

characterClicked = (index) => {

  let [...charPhotos] = this.state.characterPhotos

  if (this.state.score === 11) {

    for (let char of charPhotos) {
      char.clicked = false
    }
    randomize(charPhotos)

    this.setState({score: 0, highScore: 12, comment: "You win! Sauron's power is broken! Play again?", characterPhotos: charPhotos})

    return true;
  }




  if (charPhotos[index].clicked) {

    for (let char of charPhotos) {
      char.clicked = false
    }

    this.setState({score: 0, highScore: ((this.state.score > this.state.highScore) ? this.state.score : this.state.highScore), comment: "Nooo! Sauron wins this one. Play again?"})
  } else {
    this.setState({score: this.state.score + 1, comment: "Excellent!"})
    charPhotos[index].clicked = true;
  }




  //From what i saw referred to as the Fisher-Yates algorithm

  function randomize(arr) {
    for (let i = arr.length-1; i > 0; i--) {
      // let z = Math.floor(Math.random() * i + 1)
      let z = Math.floor(Math.random() * arr.length)

          let temp = arr[z];
          arr[z] = arr[i];
          arr[i] = temp;
    }
  }

  randomize(charPhotos)


    this.setState({characterPhotos: charPhotos})

}





  render () {
    return (
      <div className="App">
        <div id="scoresDiv">
          <span className="scoreCard">Current Score: {this.state.score}</span>
          <span className="scoreCard">High Score: {this.state.highScore}</span>
          <h1 id="comment">{this.state.comment}</h1>
        </div>
        { this.state.characterPhotos.map((char, index )=> {
          return (
            <Character key={char.key} source={char.source} clicked={this.characterClicked.bind(this, index)}></Character>
          )

        })
        }

      </div>
    );
  }
  }


export default App;
