import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const logMiddleware = () => (dispatch) => (action) => {
    console.log(action.type);
    return dispatch(action);
};

const stringMiddleware = () =>(dispatch) => (action) => {
    if (typeof action === "string"){
        return dispatch({
            type: action
        });
    };

    return dispatch(action)
};

const stringEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {
        if (typeof action === "string"){
            return originalDispatch({
                type: action
            });
        };

        return originalDispatch(action);
    };

    return store;
};

const logEnhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const originalDispatch = store.dispatch;

    store.dispatch = (action) => {
        console.log(action.type)

        return originalDispatch(action);
    };

    return store;
};

//const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout = 0) => (dispatch) => {
    setTimeout(()=>{
        dispatch({type: "TEST"})
    }, timeout);
};

store.dispatch(delayedActionCreator(2000))

export default store;