const initialState = {
    breeds: [],
    breedImages: [],
    randomDogImage: null, // one is a string
    randomDogImages: [] // this is an array
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_BREED_LIST':
            return { ...state, breeds: action.payload }
        case 'SET_BREED_DETAILS':
            return { ...state, breedImages: action.payload }
        case 'SET_RANDOM_DOG_IMG':
            return { ...state, randomDogImage: action.payload } // 1 random dog breed image
            case 'SET_RANDOM_DOG_IMAGES':
                return { ...state, randomDogImages: action.payload } // 3 random dog breed images
        default:
            return state
    }
}

export default reducer