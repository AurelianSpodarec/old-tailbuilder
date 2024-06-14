import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Provider } from 'react-redux'


import reportWebVitals from './utility/reportWebVitals';
import "./../src/styles/styles.scss";

import { store } from './stores/store';
import { fetchPages } from './stores/features/pages/pagesSlice';

import App from './views/App';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// TODO: Maybe create a file 'onload'?
store.dispatch(fetchPages())

root.render(
<React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</React.StrictMode>
);

reportWebVitals();