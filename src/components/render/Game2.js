import React from 'react'
import Button from '../Button';

export default (props) => {
    // console.log(props);
    if(!props.arrayOfOptions) {
        return '.....loading!'
    }

    const shuffledOptions = props.shuffle(props.arrayOfOptions)
    return <>
        <h2 className="content-subhead">Game 2</h2>
        <p>Guess the right Breed</p>
        <button onClick={() => props.history.push('/')} className="pure-button pure-button-primary">Go Back</button><br/><br/>
        <div className="pure-u-1"><img className="pure-img-responsive" src={props.randomPicture} alt="Random dog" /></div>
        {shuffledOptions.map((option, index) => (
            <Button key={index} onClick={props.handleClick} value={option}>{option}</Button>
        ))}
        {/* <button onClick={props.handleClick} value={shuffledOptions[0]}>Option 1 > {shuffledOptions[0]}</button><br/>
        <button onClick={props.handleClick} value={shuffledOptions[1]}>Option 2 > {shuffledOptions[1]}</button><br/>
        <button onClick={props.handleClick} value={shuffledOptions[2]}>Option 3 > {shuffledOptions[2]}</button><br/> */}
    </>
}