import React, { Component } from 'react'
import { connect } from 'react-redux'

class DogList extends Component {
    state = {

    }

    getAllBreeds = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            // console.log(response);
            const getData = await response.json()
            const dogBreeds = getData.message
            // console.log(dogBreeds);
            const dogBreedsArray = Object.keys(dogBreeds)
            return this.setState({dogBreeds: dogBreedsArray})
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    }

    componentDidMount() {
        this.getAllBreeds()        
    }

    componentWillUnmount() {

    }

    render() {
        console.log('The state > ', this.state);
        return null
    }
}



const mapStateToProps = (state) => {
    // console.log('STATE OF THE STORE IN MSTP', state)

    return {
        dogs: state
    }
}

export default connect(mapStateToProps)(DogList)