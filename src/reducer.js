const reducer = (state = [], action = {}) => {
    switch (action.type) {
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