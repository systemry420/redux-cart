
export const initState = {
    cats: []
}

export const catsReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_CAT":
            return {...state, cats: [...state.cats, action.payload.cat]}
    
        default:
            return state
    }
}