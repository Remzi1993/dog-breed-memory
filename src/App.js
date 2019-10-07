import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListBreeds from './components/ListBreeds'
import {Route} from 'react-router-dom'
import BreedDetails from './components/BreedDetails'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/"> <ListBreeds/></Route>  
        <Route exact path="/dog/breed/:breed"><BreedDetails /></Route>
       
      </header>
    </div>
  );
}

export default App;
