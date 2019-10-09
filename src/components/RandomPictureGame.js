/*

1. The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options.

2. When a user makes the correct choice, they proceed to the next question.

3. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.

4. The game must keep track of the user’s performance and display a success rate (in percentages) on the page.

*/



import React, { Component } from 'react'
import { connect } from 'react-redux'


class RandomPictureGame extends Component {
    state = {
        RandomPicture: null
    }

    GetRandomPicture = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            // console.log(response);
            const data = await response.json()
            const url = data.message
            // console.log('URL > ', url);
            this.setState({ RandomPicture: url })




            
            // const randomBreedArray = Object.keys(dogBreeds)
            // console.log(randomBreedArray);
            

            // pass payload as argument to setBreeds
            // this.setRandomImage(randomBreedArray)
            // this.setState({dogBreeds: dogBreedsArray})
        }
        catch (err) {
            console.log('fetch failed', err);
        }
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

// export default RandomPictureGame


const mapStateToProps = (state) => {
    // console.log('STATE OF THE STORE IN MSTP', state)

    return {
        dogBreeds: state.dogBreeds
    }
}

export default connect(mapStateToProps)(RandomPictureGame)