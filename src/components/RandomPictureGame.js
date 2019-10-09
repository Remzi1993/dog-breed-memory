import React from 'react'

export default function RandomPictureGame(props) {
    // console.log(props);
    
    if(!props.arrayOfOptions) {
        return '.....loading!'
    }
    function shuffle(array) {
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

    const shuffledOptions = shuffle(props.arrayOfOptions)

    return <>
        <button onClick={() => props.history.push('/')}>Go Back</button><br/>
        <img src={props.randomPicture} alt="Random dog" style={{ maxWidth: '80%' }}/><br/>
            
        <button onClick={props.handleClick} value={shuffledOptions[0]}>Option 1 > {shuffledOptions[0]}</button><br/>
        <button onClick={props.handleClick} value={shuffledOptions[1]}>Option 2 > {shuffledOptions[1]}</button><br/>
        <button onClick={props.handleClick} value={shuffledOptions[2]}>Option 3 > {shuffledOptions[2]}</button><br/>
    </>
    
}