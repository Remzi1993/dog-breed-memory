import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBreedDetails } from '../actions/fetchBreedDetails'

class BreedDetailsContainer extends Component {
  state = {
    breedImages: null
  }

  componentDidMount() {
    this.props.fetchBreedDetails(this.props.match.params.breed)
  }

  render() {
    const images = this.props.breedImages

    return <>
      <h2 className="content-subhead">Dog breed images</h2>
      <p>This page will show images of a specific dog breed.</p>
      <button onClick={() => this.props.history.push('/breeds')} className="pure-button pure-button-primary">Go Back</button>
      <br/><br/>

      <div className="pure-g">
          { images && images.map((url, index) => <div key={index} className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
            <img className="pure-img-responsive" src={ url } alt={index} /></div>) }
          { !images && 'Loading...' }
      </div>
      <button onClick={() => this.props.history.push('/breeds')} className="pure-button pure-button-primary">Go Back</button>
    </>
  }
}

const mapDispatchToProps = {
  fetchBreedDetails
}

const mapStateToProps = (state) => {
  return {
    breedImages: state.breedImages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetailsContainer);