import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";
import store, { history } from './store';

const route = (
    <Router history={browserHistory} >
        <Route path='/' component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:photoId" component={Single}></Route>
        </Route>
    </Router>
)

render(
    route,
    document.getElementById('root')
);