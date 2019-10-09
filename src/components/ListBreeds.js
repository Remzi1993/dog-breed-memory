import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreedList } from '../actions/breeds' 



class ListBreeds extends Component {

    componentDidMount(){
        this.props.fetchBreedList()
    }

    render() {
        return <>
            <h2 className="content-subhead">Dog breeds</h2>
            <button onClick={() => this.props.history.push('/')} className="pure-button pure-button-primary">Go Back</button>
            <ul>
            {this.props.breeds === null ? <span>Loading</span> : this.props.breeds.map((breed, index) => {
                return <Link to={`/breeds/${breed}`} key={index}><li>{breed}</li></Link>
            }) }
            </ul>
            <button onClick={() => this.props.history.push('/')} className="pure-button pure-button-primary">Go Back</button>
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