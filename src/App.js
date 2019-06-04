import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Card } from "./components/CardList";
import images from "./images.json";
import { Container, Row, Col, Footer } from "./components/Grid";

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    cardArray: images,
    statusMsg: ""
  };

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  };

  updateGame = event => {
    let arr = this.state.cardArray;
    console.log(arr);
    // check or update the "clicked" flag on the card
    const key = parseInt(event.target.id);
    for (let i = 0; i < arr.length; i++) {
      let card = arr[i];
      if (card.id === key) {
        if (card.clicked) {
          this.setState({
            statusMsg: "You already clicked that card. Better luck next time! Score resets!",
            topScore: (this.state.currentScore >= this.state.topScore ? this.state.currentScore : this.state.topScore)
          });
          this.resetGame();
        }
        else {
          card.clicked = true;
          this.setState({
            statusMsg: "You guessed a new card, nice! Keep going!",
            cardArray: arr,
            currentScore: this.state.currentScore + 1,
            topScore: (this.state.currentScore + 1 >= this.state.topScore ? this.state.currentScore +1 : this.state.topScore)
          });
        }
      }
    };

    // shuffle the card array
    this.shuffle(arr);
    this.setState({ cardArray: arr });
  }

  resetGame() {
    let arr = this.state.cardArray;
    for(let i = 0; i < arr.length; i++) {
      arr[i].clicked = false;
    }

    // resets the current score and the "clicked" flags on images
    this.setState({
      currentScore: 0,
      cardArray: arr
    });
  };

  render() {
    return (
      <div>
        <Nav
          currentScore={this.state.currentScore}
          topScore={this.state.topScore} />
        <Jumbotron msg={this.state.statusMsg} />
        <Container>
          <Row>
            <Col size="md-12">
              {this.state.cardArray.length !== 0 ? (
                <div>
                  {this.state.cardArray.map(card => <Card id={card.id} key={card.id} src={card.src} onClick={this.updateGame} />)}
                </div>
              ) : (
                  <h1>No recipes found!</h1>
                )}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  };
}

export default App;
