const initialvalue = []

export const cartReducer = (state=initialvalue,action) => {
    switch (action.type) {
        case "UPDATE_CART":
            return action.payload
        default:
            return state
    }
}