/*
中间件异步操作
 比如点击 button 后，需要先去服务器请求数据，只有等拿到数据后，才能重新渲染 view，此时我们又希望 dispatch 或者 reducer 拥有异步请求的功能；
 */
import {createStore, applyMiddleware, compose/*从右到左来组合多个函数。*/} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../Reducers/Reducer';

export default function configureStore(initialState) {
    //创建 一个Redux store 来以存放应用中所有的 state。 应用中应有且仅有一个 store。
    const store = createStore(reducer,initialState, compose(
        applyMiddleware(thunkMiddleware),
        typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f//redux的chrome插件，可以帮助我们自动生成redux的devtool界面
    ));
    return store;
}