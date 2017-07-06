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
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={AllTodosRoutes}/>
                <Route path='/new' component={NewRoutes}/>
                <Route path='/active' component={ActiveRoutes}/>
                <Route path='/completed' component={CompletedRoutes}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);