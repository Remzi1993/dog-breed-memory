import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRandomDogImage } from '../actions/fetchRandomDogImage'
import { fetchRandomDogImages } from '../actions/fetchRandomDogImages'
import { fetchBreedList } from '../actions/fetchBreedList'
import Render from './render/Game2'


class RandomPictureGame extends Component {
    state = {
        // arrayOfOptions: [],
        // playerAnswer: null,
        // rightAnswer: null,
        // countCorrectAnswers: 0,
        // countIncorrectAnswers: 0,
        // total: 0
    }

    componentDidMount() {
        this.props.fetchRandomDogImage()
        this.props.fetchRandomDogImages()
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

    handleClick = (imageURL) => {
        console.log(imageURL);
        
        if (imageURL === this.props.randomDogImage) {
            // console.log('Correct answer!');
            this.props.fetchRandomDogImage()
            this.props.fetchRandomDogImages()

            this.setState({
                playerAnswer: true,
                countCorrectAnswers: this.state.countCorrectAnswers + 1,
                total: this.state.total + 1

            })
            // console.log('countCorrectAnswers > ', this.state.countCorrectAnswers);
            // this.props.fetchRandomDogImage()
        }
        else {
            // console.log('Wrong answer!');
            this.props.fetchRandomDogImage()
            this.props.fetchRandomDogImages()
            
            this.setState({
                playerAnswer: false,
                rightAnswer: this.getCurrentDog(),
                countIncorrectAnswers: this.state.countIncorrectAnswers + 1,
                total: this.state.total + 1
            })

            // console.log('countIncorrectAnswers > ', this.state.countIncorrectAnswers);
            setTimeout(this.tempTimeout, 2000);
        }
    }

    render() {
        // console.log('The correct asnwer > ', this.randomDogImage);
        // console.log('Two incorrect > ', this.props.randomDogImages);
        // console.log('The answer > ', this.getCurrentDog());

        const dogImages = this.props.randomDogImages
        dogImages.push(this.props.randomDogImage);
        // console.log('dogImages > ', dogImages);
        

        const shuffledImages = this.shuffle(dogImages)
        // console.log('shuffledImages > ', shuffledImages)
        
        
        return <Render
            history = {this.props.history}
            shuffledImages = {shuffledImages}
            handleClick = {this.handleClick}

            // playerAnswer = {this.state.playerAnswer}
            // rightAnswer = {this.state.rightAnswer}
            // percentage = {percentage}
        />
    }
}

const mapDispatchToProps = {
    fetchRandomDogImage,
    fetchRandomDogImages,
    fetchBreedList
}

const mapStateToProps = (state) => {
    return {
        randomDogImage: state.randomDogImage,
        randomDogImages: state.randomDogImages,
        breeds: state.breeds
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPictureGame);
