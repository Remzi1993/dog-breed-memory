import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListBreeds extends Component {
    state = {
        dogBreeds: null
    }

    getAllBreeds = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            // console.log(response);
            const getData = await response.json()
            const dogBreeds = getData.message
            // console.log(dogBreeds);
            const dogBreedsArray = Object.keys(dogBreeds)
            // console.log(dogBreedsArray);
            this.setState({dogBreeds: dogBreedsArray})
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
        // console.log('The state > ', this.state);
        console.log(this.getAllBreeds());
        
        // const breeds = this.getAllBreeds()

        

        return <>
            <h1>Dog breeds:</h1>
            <ul>
            {this.state.dogBreeds === null ? <span>Loading</span> : this.state.dogBreeds.map((breed, index) => {
                return <li key={index}>{breed}</li>
            }) }
            </ul>
        </>
    }
}



const mapStateToProps = (state) => {
    // console.log('STATE OF THE STORE IN MSTP', state)

    return {
        dogs: state
    }
}

export default connect(mapStateToProps)(ListBreeds)