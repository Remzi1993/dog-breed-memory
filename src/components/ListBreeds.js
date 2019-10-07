import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListBreeds extends Component {

    getAllBreeds = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            // console.log(response);
            const data = await response.json()
            const dogBreeds = data.message
            // console.log(dogBreeds);
            const dogBreedsArray = Object.keys(dogBreeds)
            // console.log(dogBreedsArray);

            // pass payload as argument to setBreeds
            this.setBreeds(dogBreedsArray)
            // this.setState({dogBreeds: dogBreedsArray})
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

    setBreeds = (payload) => {
        // console.log(payload);
        
        const action = {
            type: 'ADD_BREEDS',
            payload: payload
        }

        this.props.dispatch(action)
    }

    render() {
        // console.log('The state > ', this.state);

        return <>
            <h1>Dog breeds:</h1>
            <ul>
            {this.props.dogBreeds === null ? <span>Loading</span> : this.props.dogBreeds.map((breed, index) => {
                return <li key={index}>{breed}</li>
            }) }
            </ul>
        </>
    }
}



const mapStateToProps = (state) => {
    // console.log('STATE OF THE STORE IN MSTP', state)

    return {
        dogBreeds: state.dogBreeds
    }
}

export default connect(mapStateToProps)(ListBreeds)