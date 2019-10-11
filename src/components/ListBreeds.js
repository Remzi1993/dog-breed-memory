import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBreedList } from '../actions/fetchBreedList' 
import Emoji from './render/Emoji'
import Loading from './render/Loading'


class ListBreeds extends Component {

    componentDidMount(){
        this.props.fetchBreedList()
    }

    render() {
        // console.log('Array of dog breeds > ', this.props.breeds);
        if ( this.props.breeds.length === 0 ) {
            return <>
                <h2 className="content-subhead">We are loading the list <Emoji symbol="😉" label="Winking Face"/></h2>
                <Loading/>
            </>
        }

        return <>
            <h2 className="content-subhead">Dog breeds</h2>
            <p>See below for a list of dog breeds.</p>
            <button onClick={() => this.props.history.push('/')} className="pure-button pure-button-primary">Go Back</button>
            <ul>
            {
                this.props.breeds.map((breed, index) => {
                    return <Link to={`/breeds/${breed}`} key={index}><li>{breed}</li></Link>
                }) 
            }
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