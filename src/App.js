import React, { Component } from 'react'
import './App.css';
import ListBreeds from './components/ListBreeds'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import BreedDetails from './components/BreedDetails'
import RandomPictureGameContainer from './components/RandomPictureGameContainer'

class App extends Component {
  render () {
    return <div className="App">
      <header className="App-header">
        <Route component={HomePage} exact path="/"/> 
        <Route component={ListBreeds} exact path="/list-breeds"/> 
        <Route component={BreedDetails} exact path="/dog/breed/:breed"/>
        <Route component={RandomPictureGameContainer} exact path="/game-1"/>
      </header>
    </div>
  }
}

export default App;
