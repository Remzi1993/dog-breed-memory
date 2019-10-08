import React, {Component} from 'react'
import BreedDetails from './BreedDetails'
import request from 'superagent'

export default class BreedDetailsContainer extends Component {
    state = { images: null }
  
    componentDidMount() {
      const breed = this.props.match.params.breed
      request
        .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
        .then(response => {
            console.log(response.body.message)
            return this.updateImages(response.body.message)})
        .catch(console.error)
    }
  
    updateImages(images) {
      this.setState({
        images: images
      })
    }
  
    render() {
      return <BreedDetails images={ this.state.images } />
    }
  }
  