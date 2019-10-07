import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ListBreeds extends Component {

    getAllBreeds = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            // console.log(response);
            const getData = await response.json()
            const dogBreeds = getData.message
            // console.log(dogBreeds);
            const dogBreedsArray = Object.keys(dogBreeds)
            // console.log(dogBreedsArray);

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
                return <Link to={`/dog/breed/${breed}`} key={index}><li>{breed}</li></Link>
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