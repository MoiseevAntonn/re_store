const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 140
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1){
        return [
            ...cartItems,
            item
        ]
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
};

const updateCartItem = (book, item) => {

    if (!item){
        return {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price
        };
    } else {
        return {
            ...item,
            count: item.count + 1,
            total: item.total + book.price
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case "FETCH_BOOKS_FAILURE":
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case "BOOK_ADDED_TO_CART":
            const bookId = action.payload;
            const book = state.books.find(book => book.id === bookId);

            const itemForUpdIndx = state.cartItems.findIndex(item => item.id === bookId);
            const itemForUpd = state.cartItems[itemForUpdIndx];
    

            const newItem = updateCartItem(book, itemForUpd);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemForUpdIndx)
            }
        default:
            return state
    }
};

export default reducer;