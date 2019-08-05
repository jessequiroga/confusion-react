import {applyMiddleware, createStore} from 'redux';
import { Reducer, initialState } from './reducer'
import {composeWithDevTools} from "redux-devtools-extension";

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
        composeWithDevTools(
            applyMiddleware(),
            // other store enhancers if any
        )
    );

    return store;
}
