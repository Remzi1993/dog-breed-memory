import React from 'react'
import Button from './Button';
import Emoji from './Emoji'
import Loading from './Loading'

export default (props) => {
    // console.log(props);
    if ( props.randomDogImage === null || props.shuffledOptions.length === 0 ) {
        return <>
            <h2 className="content-subhead">We are loading your game <Emoji symbol="😜" label="Winking Face With Tongue"/></h2>
            <Loading/>
        </>
    }

    // console.log(props.playerAnswer);
    // console.log('Prencentage > ', props.percentage);

    return <>
        <h2 className="content-subhead">The Dog Quiz</h2>
        <p>Random dog game</p>
        <button onClick={() => props.history.push('/')} className="pure-button pure-button-primary">Go Back</button><br/><br/>

        <h3>Do you know the breed?</h3>
        <div className="pure-u-1"><img className="pure-img-responsive" src={props.randomDogImage} alt="Random dog" /></div>
        

        { (props.playerAnswer === false) ? <p>
            <button className="button-error pure-button">Your answer is incorrect!</button>
            <button className="button-success pure-button">The right answer is: {props.rightAnswer}</button>
        </p> : <p>
            {props.shuffledOptions.map((option, index) => (
                <Button key={index} onClick={props.handleClick} value={option}>{option}</Button>
            ))}
        </p> }

        <h2>Stats</h2>
        <p>Your percentage: {Math.round(props.percentage)}%<br/>
        Correct answers: {props.countCorrectAnswers}<br/>
        Incorrect asnwers: {props.countIncorrectAnswers}</p>
    </>
}