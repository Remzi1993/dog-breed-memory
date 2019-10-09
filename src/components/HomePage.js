import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setBreedList, fetchBreedList } from '../actions/breeds' 

class HomePage extends Component {

  render () {
    return <>
      <h2 className="content-subhead">🐕🐩 Dog breed memorization game. 🐕🐩</h2>
      <p>📋 Features 📋</p>
      <ol>
        <li>The app should have a dog list page where it lists all the breeds, so the user can memorise the names of all the breeds.</li>
        <li>When you click one of the breeds on the doglist page you should go to a page that shows 10 pictures of that breed. So the user can see what a breed looks like.</li>
        <li>The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options.</li>
        <li>When a user makes the correct choice, they proceed to the next question.</li>
      </ol>
    </>
  }
}

// mapDispatchToProps 
// object, with action creators you want to 
// be able to dispatch from this component
const mapDispatchToProps = {
  setBreedList,
  fetchBreedList
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// same as above
// export default connect(mapStateToProps, { setBreedList, fetchBreedList})(App);