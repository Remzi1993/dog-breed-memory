import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hero extends Component {
    state = {
        changedName: ''
    }

    rest = () => {
        // console.log('Im tired man!')
        const action = {
            type: 'REST'
        }

        this.props.dispatch(action)
    }

    pickup = (weaponType, damage) => {
        // console.log('hello')
        const action = {
            type: "PICKUP_WEAPON",
            payload: {
                type: weaponType,
                damage: damage
            }
        }

        this.props.dispatch(action)
    }

    handleSubmit = (event) => {
        event.preventDefault() // no refresh pls
        console.log('submitting form')
        const action = {
            type: 'CHANGE_NAME',
            payload: this.state.changedName
        }

        this.props.dispatch(action)
        this.setState({ changedName: '' })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ changedName: event.target.value })
    }

    render(){
        // console.log("PROPS of HERO", this.props)
        const { name, health, weapon, inventory } = this.props.batman

        return <div>
            <h1>{name}</h1>
            <p>Health: {health}</p>
            <p>Weapon: {weapon.type}</p>
            <div>
                <h3>Inventory</h3>
                { inventory.map(item => {
                    return <div>
                        <p>TYPE: {item.type}</p>
                        <p>DAMAGE: {item.damage}</p>
                    </div>
                }) }
            </div>
            <button onClick={this.rest}>REST</button>
            <button onClick={() => this.pickup('lollipop', 1)}>Pickup Lollipop</button>
            <button onClick={() => this.pickup('tuba', 99)}>Pickup Tuba</button>
            <form onSubmit={this.handleSubmit}>
                <label>Change name</label>
                <input value={this.state.changedName} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    }
}




class RandomPictureGame extends Component {

    // GetRandomPicture = async () => {
    //     try {
    //         const response = await fetch('https://dog.ceo/api/breeds/image/random');
    //         // console.log(response);
    //         const data = await response.json()
    //         const url = data.message
    //         // console.log('URL > ', url);
    //         this.setState({ RandomPicture: url })




            
    //         // const randomBreedArray = Object.keys(dogBreeds)
    //         // console.log(randomBreedArray);
            

    //         // pass payload as argument to setBreeds
    //         // this.setRandomImage(randomBreedArray)
    //         // this.setState({dogBreeds: dogBreedsArray})
    //     }
    //     catch (err) {
    //         console.log('fetch failed', err);
    //     }
    }

    quiz() {
        // console.log('From the store > ', this.props.dogBreeds);

        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item 

        // console.log(this.state.RandomPicture);

        
        // const randomBreed = this.state.RandomPicture.split('/')[4].split('-')[0]

        // console.log('The dog in the picture > ', randomBreed);

        
        // items[Math.floor(Math.random() * items.length)]
    }

    componentDidMount() {
        // this.GetRandomPicture()
        // if (this.props.dogBreeds === null ) {
        //     this.GetRandomPicture()
        // }
    }


    render() {
        // console.log('The local state > ', this.state);
        // this.state.RandomPicture === null ? <span>Loading quiz..</span>this.quiz()
   
        return <>
        <button onClick={() => this.props.history.push('/')}>Go Back</button><br/>
        {/* <img src={this.state.RandomPicture} alt="Random dog breed"/> */}
        Test 394350</>
    }
}








const mapStateToProps = (state) => {
    // console.log('STATE OF THE STORE IN MSTP', state)

    return {
        batman: state
    }
}

export default connect(mapStateToProps)(Hero)