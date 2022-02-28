import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './store/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import FilmDetailComponent from "./components/FilmDetailComponent";

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/movie/:id' component={FilmDetailComponent} />
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
