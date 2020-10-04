import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';

// Her componente tek tek import etmemek için genel css kütüphanesi buraya eklendi.
import './assets/css/base.css';

ReactDOM.render(
    <App/>,
    document.getElementById('app'),
);

