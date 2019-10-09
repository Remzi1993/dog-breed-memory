/*

1. The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options.

2. When a user makes the correct choice, they proceed to the next question.

3. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.

4. The game must keep track of the user’s performance and display a success rate (in percentages) on the page.

*/



import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRandomPic } from '../actions/getRandomPic' 



class RandomPictureGame extends Component {
    componentDidMount(){
        this.props.fetchRandomPic()
    }
    render() {
        // console.log('The state > ', this.state);
        return <>
            <button onClick={() => this.props.history.push('/')}>Go Back</button>
        </>
    }
}
const mapDispatchToProps = {
    fetchRandomPic
  }
  
  const mapStateToProps = (state) => {
    return {
        RandomPicture: state.picture
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RandomPictureGame);