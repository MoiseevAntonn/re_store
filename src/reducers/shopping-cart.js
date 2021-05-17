const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    };

    if (idx === -1){
        return [
            ...cartItems,
            item
        ]
    } 
    
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
    
};

const updateCartItem = (book, item, quantity) => {

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
            count: item.count + quantity,
            total: item.total + quantity * book.price
        }
    };
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books},shoppingCart: {cartItems}} = state;
    const book = books.find(book => book.id === bookId);

    const itemIndx = cartItems.findIndex(item => item.id === bookId);
    const item = cartItems[itemIndx];

    const newItem = updateCartItem(book, item, quantity);

    return {
        orderTotal: 0,
        cartItems: updateCartItems(state.shoppingCart.cartItems, newItem, itemIndx)
    }
};

const updateShoppingCart = (state, action) => {
    if (state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
        }
    };

    switch (action.type){
        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1);
        case "BOOK_DELETED_ALL_FROM_CART":
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        case "BOOK_DELETED_FROM_CART":
            return updateOrder(state, action.payload, -1);
        default:
            return state.shoppingCart
    }
};

export default updateShoppingCart;