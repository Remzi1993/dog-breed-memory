import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreedDetails } from '../actions/breedDetails' 

class BreedDetailsContainer extends Component {
    state = {
      images: null
    }
  
    componentDidMount() {
        this.props.fetchBreedDetails(this.props.match.params.breed)
    }
  
    render() {
      const images = this.props.images

      return <>
      <h1>Dogs Breed Images</h1>
      <p>This page will show images of a specific dog breed.</p>
      <Link to="/">Go back to the index</Link>
      <div>
        { images && images.map((url, index) => <img key={index} src={ url } alt="Dog" />) }
        { !images && 'Loading...' }
      </div>
      </>
    }

  }
  
  const mapDispatchToProps = {
    fetchBreedDetails
  }
  
  const mapStateToProps = (state) => {
    return {
      images: state.images
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(BreedDetailsContainer);