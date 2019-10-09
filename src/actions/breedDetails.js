export const setBreedDetails = (images) => {
    return {
        type: 'SET_BREED_DETAILS',
        payload: images
    }
}

// THUNK ACTION CREATOR
export const fetchBreedDetails = (breed) => {
    return function (dispatch, getState) {
        fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
            .then(response => response.json())
            .then(data => {
                dispatch(setBreedDetails(data.message.slice(0, 10)))
            }).catch(
                error => console.log(error)
            )
    }
}