/*

3. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.

4. The game must keep track of the user’s performance and display a success rate (in percentages) on the page.

*/


import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import {
    fetchRandomPic
} from '../actions/getRandomPic'
import {
    fetchBreedList
} from '../actions/breeds'
import RandomPictureGame from './RandomPictureGame'


class RandomPictureGameContainer extends Component {
    state = {
        arrayOfOptions: [],
        // currentDog: null
    }

    componentDidMount() {
        this.props.fetchRandomPic()
        this.props.fetchBreedList()
    }

    handleClick = (event) => {
        // console.log('Button value > ', event.target.value);

        if (event.target.value === this.currentDog()) {
            this.props.fetchRandomPic()
        }
    }

    currentDog() {
        const randomPicture = this.props.randomPicture
        return randomPicture === null ? null : randomPicture.split('/')[4].split('-')[0]
    }


    render() {
        const dogBreeds = this.props.breeds

        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item

        const randomBreed1 = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
        const randomBreed2 = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]

        // console.log('Random breed 1 > ', randomBreed1);
        // console.log('Random breed 2 > ', randomBreed2);

        const options = new Set([this.currentDog(), randomBreed1, randomBreed2]);

        const arrayOfOptions = [...options]

        return <>
            <RandomPictureGame
                randomPicture = {this.props.randomPicture}
                arrayOfOptions = {arrayOfOptions}
                breeds = {this.state.breeds}
                history = {this.props.history}
                handleClick = {this.handleClick}
            />
        </>




    }

}

const mapDispatchToProps = {
    fetchRandomPic,
    fetchBreedList
}

const mapStateToProps = (state) => {
    return {
        randomPicture: state.picture,
        breeds: state.breeds
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPictureGameContainer);