/*

1. The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options.

2. When a user makes the correct choice, they proceed to the next question.

3. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.

4. The game must keep track of the user’s performance and display a success rate (in percentages) on the page.

*/



import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRandomPic } from '../actions/getRandomPic' 
import { fetchBreedList } from '../actions/breeds' 
import { log } from 'util'



class RandomPictureGame extends Component {


    componentDidMount(){
        this.props.fetchRandomPic()
        this.props.fetchBreedList()
        
    }

    quiz() {
        // console.log('From the store > ', this.props.picture);
        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item 
        // console.log(this.state.RandomPicture);
        
        // const randomBreed = this.state.RandomPicture.split('/')[4].split('-')[0]
        // console.log('The dog in the picture > ', randomBreed);
        
        // items[Math.floor(Math.random() * items.length)]
    }





    render() {
        // console.log('From the store > ', this.props.RandomPicture);
        // console.log('breeds from the store > ', this.props.breeds);
       


        const randomPicture = this.props.RandomPicture
        const dogBreeds =this.props.breeds

        // Below we split the url with / than we get an array, sometimes in that array we get also the alternative name
        // we split that also en we select the first item
        const currentDog = randomPicture === null ? null : randomPicture.split('/')[4].split('-')[0]
        // console.log('Current dog > ', currentDog);
        // console.log('dog breeds', dogBreeds)

       const randomBreed1 = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
       const randomBreed2 = dogBreeds[Math.floor(Math.random() * dogBreeds.length)]
        //    console.log('random breed1>', randomBreed1);
        //    console.log('random2>', randomBreed2);

        const options = new Set([currentDog, randomBreed1, randomBreed2])
        console.log([...options]);
        
        
       const arrayOfOptions = [...options]

        




        return <>
          <button onClick={() => this.props.history.push('/')}>Go Back</button><br/>
         
           <img src={this.props.RandomPicture} alt="Random" style={{ maxWidth: '80%' }}/><br/>

          
           <button>Option 1 : {arrayOfOptions[0]}</button><br/>
            <button>Option 2 : {arrayOfOptions[1]}</button><br/>
            <button>Option 3 : {arrayOfOptions[2]}</button>
        </>
    }
}
const mapDispatchToProps = {
    fetchRandomPic,    
    fetchBreedList
  }
  
  const mapStateToProps = (state) => {
    return {
        RandomPicture: state.picture,
        breeds: state.breeds
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RandomPictureGame);