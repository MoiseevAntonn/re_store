import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {withBookstoreService} from "../hoc";
import {connect} from "react-redux";
//import {booksLoaded, booksRequested, booksError} from "../../actions";
import {fetchBooks, bookAddedToCart} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./book-list.css";

const BookList = ({books, onAddToCart}) => {
    return (
        <ul className="book-list">
            {books.map( (book) => {
                return (
                    <li key={book.id}> 
                        <BookListItem book={book} onAddToCart={() => onAddToCart(book.id)}/> 
                    </li>
                )
            })}
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount(){
        // const {getData, booksLoaded, booksRequested, booksError} = this.props;

        // booksRequested();

        // getData()
        // .then(data => {
        //     booksLoaded(data);
        // })
        // .catch(err => {
        //     booksError(err);
        // });

        const {fetchBooks} = this.props;

        fetchBooks();
    };

    render(){
        const {books, loading, error, onAddToCart} = this.props;

        if (loading){
            return <Spinner/>
        };

        if (error){
            return <ErrorIndicator/>
        };


        return <BookList books={books} onAddToCart={onAddToCart}/>
    }
};

const mapServiceToProps = (service) => {
    return {
        getData: service.getBooks.bind(service)
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({booksLoaded}, dispatch);
// };

/*const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
}*/

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchBooks: fetchBooks(dispatch, ownProps.getData),
    onAddToCart: (id) => {dispatch(bookAddedToCart(id))}
})



export default withBookstoreService(mapServiceToProps)(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));