import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreedList } from '../actions/breeds' 



class ListBreeds extends Component {

    componentDidMount(){
        this.props.fetchBreedList()
    }

    render() {
        // console.log('The state > ', this.state);

        return <>
            <button onClick={() => this.props.history.push('/')}>Go Back</button>
            <h1>Dog breeds:</h1>
            <ul>
            {this.props.breeds === null ? <span>Loading</span> : this.props.breeds.map((breed, index) => {
                return <Link to={`/dog/breed/${breed}`} key={index}><li>{breed}</li></Link>
            }) }
            </ul>
            <button onClick={() => this.props.history.push('/')}>Go Back</button>
        </>
    }
}

const mapDispatchToProps = {
    fetchBreedList
  }
  
  const mapStateToProps = (state) => {
    return {
      breeds: state.breeds
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListBreeds);