export const initialState = {
    cart: [],
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
            case 'REMOVE_FROM_CART':
                let newcart = [...state.cart]
                const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
                if(index >= 0){
                    newcart.splice(index,1)
                } else {
                    console.log("Error removing item form cart");
                }
                return {...state, cart: newcart}
    }
} 
export default reducer;