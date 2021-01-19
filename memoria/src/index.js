import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import  { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import asyncMiddleware from './async-middleware'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import './index.css';
import * as reducers from './reducers'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//primero todas las funcoones a despachar se las manda a thunk, luego si no pasa na a asyncmiddleware, asi ....

const Loader = x => Loadable({
  loading: () => 'Cargando...',
  loader: x
})

const App = Loader( () => import('./App'))
const App2 = Loader( () => import('./App2'))



const combineR = combineReducers({
  ...reducers,
  form: formReducer,
})


const store = createStore(combineR , applyMiddleware(thunk , asyncMiddleware)) //pasarle el middleware que convierte thunk

const history =  createBrowserHistory()


ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route exact path="/" component={App}/>
        <Route exact path="/users" component={App2}/>
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
