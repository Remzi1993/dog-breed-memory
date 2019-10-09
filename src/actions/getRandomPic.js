export const setRandomPic = (picture) => {
    return {
        type: 'SET_RANDOM_PIC',
        payload: picture
    }
}

// THUNK ACTION CREATOR
export const fetchRandomPic = () => {
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
                dispatch(setRandomPic(data.message))
                // dispatch({ type: 'SET_CORRECT_ANSWER', payload: 'bulldog'})
                // dispatch({ type: 'SET_OPTIONS', payload: ['bulldog', 'kelpi', 'shibe']})
            }).catch(
                error => console.log(error)
            )
    }
}