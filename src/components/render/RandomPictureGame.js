import React from 'react'
import Button from './Button';

export default (props) => {
    // console.log(props);
    if (props.shuffledOptions.length === 0) {
        return <h2 className="content-subhead">Loading...</h2>
    }

    console.log(props.playerAnswer);
    console.log('Prencentage 2 > ', props.percentage);


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

        <div>Your percentage: <span>{props.percentage}%</span></div>
        
        {/* <button onClick={props.handleClick} value={shuffledOptions[0]}>Option 1 > {shuffledOptions[0]}</button><br/>
        <button onClick={props.handleClick} value={shuffledOptions[1]}>Option 2 > {shuffledOptions[1]}</button><br/>
        <button onClick={props.handleClick} value={shuffledOptions[2]}>Option 3 > {shuffledOptions[2]}</button><br/> */}
    </>
}