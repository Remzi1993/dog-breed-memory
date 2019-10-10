import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRandomDogImage } from '../actions/fetchRandomDogImage'
import { fetchBreedList } from '../actions/fetchBreedList'
import Render from './render/RandomPictureGame'


class RandomPictureGame extends Component {
    state = {
        arrayOfOptions: []
    }

    componentDidMount() {
        this.props.fetchRandomDogImage()
        this.props.fetchBreedList()
    }

    handleClick = (event) => {
        // console.log('Button value > ', event.target.value);
        if (event.target.value === this.getCurrentDog()) {
            this.props.fetchRandomDogImage()
        }
    }

    getCurrentDog() {
        const randomDogImage = this.props.randomDogImage
        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item
        return randomDogImage === null ? null : randomDogImage.split('/')[4].split('-')[0]
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    render() {
        const dogBreeds = this.props.breeds
        const randomBreed1 = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
        const randomBreed2 = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]

        // console.log('Random breed 1 > ', randomBreed1);
        // console.log('Random breed 2 > ', randomBreed2);

        const options = new Set([this.getCurrentDog(), randomBreed1, randomBreed2]);

        const arrayOfOptions = [...options]

        return <>
            <Render
                randomDogImage = {this.props.randomDogImage}
                arrayOfOptions = {arrayOfOptions}
                breeds = {this.state.breeds}
                history = {this.props.history}
                handleClick = {this.handleClick}
                shuffle = {this.shuffle}
            />
        </>

    }
}

const mapDispatchToProps = {
    fetchRandomDogImage,
    fetchBreedList
}

const mapStateToProps = (state) => {
    return {
        randomDogImage: state.randomDogImage,
        breeds: state.breeds
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPictureGame);
