import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRandomPic } from '../actions/getRandomPic'
import { fetchBreedList } from '../actions/breeds'
import Render from './render/Game2'


class Game2 extends Component {
    state = {
       
    }

    componentDidMount() {
        this.props.fetchRandomPic()
        this.props.fetchBreedList()
    }

    handleClick = (event) => {
        // console.log('Button value > ', event.target.value);
        if (event.target.value === this.getCurrentBreed()) {
            this.props.fetchBreedList()
        }
    }

    getCurrentBreed() {
        const randomPicture = this.props.picture
        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item
        return randomPicture === null ? null : randomPicture
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
        const dogPics = this.props.picture
        const randomPic1 = dogPics
        const randomPic2 = dogPics

        console.log('Random pic1 > ', randomPic1);
        // console.log('Random breed 2 > ', randomBreed2);

        const options = new Set([this.getCurrentBreed(), randomPic1, randomPic2]);

        const arrayOfOptions = [...options]

        return <>
            <Render
                randomPicture = {this.props.randomPicture}
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
    fetchRandomPic,
    fetchBreedList,
}


const mapStateToProps = (state) => {
    return {
        randomPicture: state.picture,
        breeds: state.breeds
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game2);

