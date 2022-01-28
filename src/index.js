import React from 'react';
import ReactDOM from 'react-dom';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import Layout from './components/Layout';
import './scss/index.scss';
import {store} from './store/store';
import {Provider} from 'react-redux';
import product_01_image_01 from '../images/products/product-01 (1).jpg';
import product_01_image_02 from '../images/products/product-01 (2).jpg';
import product_02_image_01 from '../images/products/product-02 (1).jpg';
import product_02_image_02 from '../images/products/product-02 (2).jpg';

import product_03_image_01 from '../images/products/product-03 (1).jpg';
import product_03_image_02 from '../images/products/product-03 (2).jpg';

import product_04_image_01 from '../images/products/product-04 (1).jpg';
import product_04_image_02 from '../images/products/product-04 (2).jpg';

import product_05_image_01 from '../images/products/product-05 (1).jpg';
import product_05_image_02 from '../images/products/product-05 (2).jpg';

import product_06_image_01 from '../images/products/product-06 (1).jpg';
import product_06_image_02 from '../images/products/product-06 (2).jpg';

import product_07_image_01 from '../images/products/product-07 (1).jpg';
import product_07_image_02 from '../images/products/product-07 (2).jpg';

import product_08_image_01 from '../images/products/product-08 (1).jpg';
import product_08_image_02 from '../images/products/product-08 (2).jpg';

import product_09_image_01 from '../images/products/product-09 (1).jpg';
import product_09_image_02 from '../images/products/product-09 (2).jpg';

import product_10_image_01 from '../images/products/product-10 (1).jpg';
import product_10_image_02 from '../images/products/product-10 (2).jpg';

import product_11_image_01 from '../images/products/product-11 (1).jpg';
import product_11_image_02 from '../images/products/product-11 (2).jpg';

import product_12_image_01 from '../images/products/product-12 (1).jpg';
import product_12_image_02 from '../images/products/product-12 (2).jpg';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
