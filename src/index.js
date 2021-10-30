import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} store={store} rerenderEntireTree={rerenderEntireTree} />
        </BrowserRouter>, document.getElementById('root')
    )
}

rerenderEntireTree(store)

store.subscribe(() => {
    rerenderEntireTree(store)
})

reportWebVitals();
