const initialState = {
    breeds: [],
    images: null,
    picture: null
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_BREED_LIST':
            return { ...state, breeds: action.payload } // dogBreeds
        case 'SET_BREED_DETAILS':
            return { ...state, images: action.payload } // SpecificDogBreedImages
        case 'SET_RANDOM_PIC':
            return { ...state, picture: action.payload } // RandomDogBreedImage
        default:
            return state
    }
}

export default reducer


// const initialState = {
//     name: 'Batman',
//     health: 5,
//     inventory: [], // <---
//     heroic: true,
//     weapon: {
//       type: 'battarang',
//       damage: 3
//     }
// }

// const reducer = (state = initialState, action = {}) => {
//     switch (action.type) {
//         case 'REST':
//             return { ...state, health: 10 }
        
//         case 'PICKUP_WEAPON': 
//             return { ...state, inventory: [...state.inventory, action.payload ]}

//         case 'CHANGE_NAME':
//             return { ...state, name: action.payload }
    
//         default:
//             return state
//     }
// }

// export default reducer