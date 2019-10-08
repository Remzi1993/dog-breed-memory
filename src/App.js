import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListBreeds from './components/ListBreeds'
import {Route} from 'react-router-dom'
import BreedDetailsContainer from './components/BreedsDetailsContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route component={ListBreeds} exact path="/"/>  
        <Route component={BreedDetailsContainer}exact path="/dog/breed/:breed"/>
       
      </header>
    </div>
  );
}

export default App;
