import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setBreedList, fetchBreedList } from '../actions/breeds' 

class HomePage extends Component {

  componentDidMount(){
    // fetch('https://dog.ceo/api/breeds/list/all')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Classic dispatch (proven technology)
    //     // console.log(Object.keys(data.message))
    //     // const action = {
    //     //   type: 'SET_BREED_LIST',
    //     //   payload: Object.keys(data.message)
    //     // }

    //     // this.props.dispatch(action)

    //     // using action creator (sync)
    //     this.props.setBreedList(Object.keys(data.message))
    //   })
    this.props.fetchBreedList()
  }

  render () {
    return <>
          <Link to="/list-breeds">List all breeds</Link>
          <Link to="/game-1">Random picture game</Link>
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