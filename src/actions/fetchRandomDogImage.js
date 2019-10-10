export const setRandomDogImage = (randomDogImage) => {
    return {
        type: 'SET_RANDOM_DOG_IMG',
        payload: randomDogImage
    }
}

// THUNK ACTION CREATOR
export const fetchRandomDogImage = () => {
    return function (dispatch, getState) {
        // const currentPicture = getState().picture

        // if (currentPicture.length !== '') {
        //     // console.log('Empty!');
        //     return
        // }

        // console.log('CURRENT BREEDS:', currentBreeds)
        // first check if we already have dogs!
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dispatch(setRandomDogImage(data.message))
            }).catch(
                error => console.log(error)
            )
    }
}