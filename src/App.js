import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListBreeds from './components/ListBreeds'
import {Route} from 'react-router-dom'
import BreedDetails from './components/BreedDetails'
import RandomPictureGame from './components/RandomPictureGame'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/"><ListBreeds/><a href="/game1">Random picture game</a></Route>  
        <Route exact path="/dog/breed/:breed"><BreedDetails /></Route>
        <Route exact path="/game1"><RandomPictureGame/></Route>
      </header>
    </div>
  );
}

export default App;
