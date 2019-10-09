import React, { Component } from 'react'
import ListBreeds from './components/ListBreeds'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import BreedDetails from './components/BreedDetails'
import RandomPictureGame from './components/RandomPictureGame'

class App extends Component {
  render () {
    return <>
        <Route component={HomePage} exact path="/"/> 
        <Route component={ListBreeds} exact path="/breeds"/> 
        <Route component={BreedDetails} exact path="/breeds/:breed"/>
        <Route component={RandomPictureGame} exact path="/game-1"/>
    </>
  }
}

export default App;