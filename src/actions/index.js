const booksLoaded = (newBooks) => ({
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
});

const booksRequested = () => ({
    type: "FETCH_BOOKS_REQUEST"
});

const booksError = (error) => ({
    type: "FETCH_BOOKS_FAILURE",
    payload: error
});

const fetchBooks = (dispatch, getData) => () => {
  
    dispatch(booksRequested());

    getData()
    .then(data => {
        dispatch(booksLoaded(data));
    })
    .catch(err => {
        dispatch(booksError(err));
    });
};

const bookAddedToCart = (bookId) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
};

export {
    fetchBooks,
    bookAddedToCart
}