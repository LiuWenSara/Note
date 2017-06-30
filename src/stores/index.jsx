import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../Reducers/Reducer';

export default function configureStore(initialState) {
    const store = createStore(reducer,initialState, compose(
        applyMiddleware(thunkMiddleware),
        typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f
    ));
    return store;
}