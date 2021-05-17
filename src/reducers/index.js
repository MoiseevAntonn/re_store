import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};

export default reducer;

// const initialState = {
//     books: [],
//     loading: true,
//     error: null,
//     cartItems: [],
//     orderTotal: 140
// };
//
// const reducer = (state = initialState, action) => {
//     switch (action.type){
//         case "FETCH_BOOKS_SUCCESS":
//             return {
//                 ...state,
//                 books: action.payload,
//                 loading: false,
//                 error: null
//             };
//         case "FETCH_BOOKS_REQUEST":
//             return {
//                 ...state,
//                 books: [],
//                 loading: true,
//                 error: null
//             };
//         case "FETCH_BOOKS_FAILURE":
//             return {
//                 ...state,
//                 books: [],
//                 loading: false,
//                 error: action.payload
//             }
//         case "BOOK_ADDED_TO_CART":
//             return updateOrder(state, action.payload, 1);
//         case "BOOK_DELETED_ALL_FROM_CART":
//             const item = state.cartItems.find(({id}) => id === action.payload);
//             return updateOrder(state, action.payload, -item.count);
//         case "BOOK_DELETED_FROM_CART":
//             return updateOrder(state, action.payload, -1);

//         default:
//             return state
//     }
// };
