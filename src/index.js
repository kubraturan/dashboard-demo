import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Dashboard Demo';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();