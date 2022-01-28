import React from 'react';
import ReactDOM from 'react-dom';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import Layout from './components/Layout';
import './scss/index.scss';
import {store} from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
