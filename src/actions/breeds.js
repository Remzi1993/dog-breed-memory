// actions
// ACTION CREATOR
// NORMAL ACTION CREATOR
export const setBreedList = (breeds) => {
    return {
        type: 'SET_BREED_LIST',
        payload: breeds
    }
}

// THUNK ACTION CREATOR
export const fetchBreedList = () => {
    return function (dispatch, getState) {
        const currentBreeds = getState().breeds

        if (currentBreeds.length !== 0) {
            // console.log('Empty!');
            return
        }

        // console.log('CURRENT BREEDS:', currentBreeds)
        // first check if we already have dogs!
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                dispatch(setBreedList(Object.keys(data.message)))
                // dispatch({ type: 'SET_CORRECT_ANSWER', payload: 'bulldog'})
                // dispatch({ type: 'SET_OPTIONS', payload: ['bulldog', 'kelpi', 'shibe']})
            }).catch(
                error => console.log(error)
            )
    }
}