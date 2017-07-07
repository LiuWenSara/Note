import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute,hashHistory,Router} from 'react-router';
import { Provider } from 'react-redux';
import App from './Containers/App';
import AllTodosRoutes from './routes/AllTodos';
import NewRoutes from './routes/New';
import ActiveRoutes from './routes/Active';
import CompletedRoutes from './routes/Completed';
import configureStore from './stores/index';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>/*用来路由变化的由hash变化决定，即地址后面／#／后的值*/
            <Route path='/' component={App}>
                <IndexRoute component={AllTodosRoutes}/>/*指定默认情况下加载的子组件*/
                <Route path='/new' component={NewRoutes}/>
                <Route path='/active' component={ActiveRoutes}/>
                <Route path='/completed' component={CompletedRoutes}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);