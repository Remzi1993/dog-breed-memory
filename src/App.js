import React, { Component } from 'react'
import ListBreeds from './components/ListBreeds'
import { Route } from 'react-router-dom'
import HomePage from './components/render/HomePage'
import BreedDetails from './components/BreedDetails'
import RandomPictureGame from './components/RandomPictureGame'
import { Link } from 'react-router-dom'
import Emoji from './components/render/Emoji'

class App extends Component {
  
  componentDidMount() {
      let layout   = document.getElementById('layout'),
          menu     = document.getElementById('menu'),
          menuLink = document.getElementById('menuLink'),
          content  = document.getElementById('main');
  
      function toggleClass(element, className) {
          let classes = element.className.split(/\s+/),
              length = classes.length,
              i = 0;
  
          for(; i < length; i++) {
            if (classes[i] === className) {
              classes.splice(i, 1);
              break;
            }
          }
          // The className is not found
          if (length === classes.length) {
              classes.push(className);
          }
  
          element.className = classes.join(' ');
      }
  
      function toggleAll(e) {
          let active = 'active';
  
          e.preventDefault();
          toggleClass(layout, active);
          toggleClass(menu, active);
          toggleClass(menuLink, active);
      }
  
      menuLink.onclick = function (e) {
          toggleAll(e);
      };
  
      content.onclick = function(e) {
          if (menu.className.indexOf('active') !== -1) {
              toggleAll(e);
          }
      };
  }

  render () {
    return <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
        <div id="menu">
        <div className="pure-menu">
          <div className="pure-menu-heading">Menu</div>
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/">Home</Link>
              </li>
              <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/breeds">Dog Breeds</Link>
              </li>
              <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/game-1">Game 1</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>The <Emoji symbol="🐶" label="Dog Face"/> app</h1>
            <h2>A group project made with <Emoji symbol="❤️" label="Red Heart"/> at Codaisseur</h2>
          </div>
          <div className="content">
          <Route component={HomePage} exact path="/"/> 
          <Route component={ListBreeds} exact path="/breeds"/> 
          <Route component={BreedDetails} exact path="/breeds/:breed"/>
          <Route component={RandomPictureGame} exact path="/game-1"/>
          </div>
        </div>
    </div>
  }
}

export default App;