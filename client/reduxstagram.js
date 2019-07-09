import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store, { history } from './store';
import App from './components/App';
import { Single } from './components/Single';
import { PhotoGrid } from './components/PhotoGrid';

import css from './styles/style.styl';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid} />
                <Route path="view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);
render(router, document.getElementById('root'));
