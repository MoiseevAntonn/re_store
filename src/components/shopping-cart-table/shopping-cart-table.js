import React from "react";
import "./shopping-cart-table.css";
import {connect} from "react-redux";
import {bookAddedToCart, bookDeletedFromCart, bookDeletedAllFromCart} from "../../actions";

const ShoppingCartTable = ({items = [], total, onIncrease, onDecrease, onDelete}) => {

    const rows = items.map(({id, title, count, total}, indx) => {
        return (
            <tr key={id}>
                <td>{indx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button className="btn btn-outline-success"
                            onClick={() => onIncrease(id)}>
                                <i className="fa fa-plus-circle"> </i>
                    </button>

                    <button className="btn btn-outline-warning"
                            onClick={() => onDecrease(id)}>
                                <i className="fa fa-minus-circle"> </i>
                    </button>

                    <button className="btn btn-outline-danger"
                                onClick={() => onDelete(id)}>
                                   <i className="fas fa-trash-o"> </i>
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <div className="shopping-cart-table">
            <h2>You order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal 
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     onIncrease: (id) => {dispatch(bookAddedToCart(id))},
//     onDecrease: (id) => {dispatch(bookDeletedAllFromCart(id))},
//     onDelete: (id) => {dispatch(bookDeletedFromCart(id))}
// });

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookDeletedFromCart,
    onDelete: bookDeletedAllFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
