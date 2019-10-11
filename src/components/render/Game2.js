import React from 'react'
// import Emoji from './Emoji'
// import Loading from './Loading'

// The app contains a second game where the user will get a different question type.
// This game must show the user the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.

export default (props) => {
    if (props.shuffledImages.lenght) {
        return <span>Loading........</span>
    }

    // console.log(props);
    // if ( props.randomDogImage === null || props.shuffledOptions.length === 0 ) {
    //     return <>
    //         <h2 className="content-subhead">We are loading your game <Emoji symbol="😜" label="Winking Face With Tongue"/></h2>
    //         <Loading/>
    //     </>
    // }

    // console.log(props.playerAnswer);
    // console.log('Prencentage > ', props.percentage);

    console.log('shuffledImages > ', props.shuffledImages);
    
    return <>
        <h2 className="content-subhead">Dog Quiz 2</h2>
        <p>Random dog game</p>
        <button onClick={() => props.history.push('/')} className="pure-button pure-button-primary">Go Back</button><br/><br/>

        <h3>Three images</h3>

        <div className="pure-g">
            {props.shuffledImages.map((image, index) => (  
                <div key={index} className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                    <img className="pure-img-responsive" onClick={()=>props.handleClick(image)} src={image} alt="a dog"/>
                </div>
            ))}
        </div>




    </>
}