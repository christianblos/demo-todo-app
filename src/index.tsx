import {Provider} from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {todoState} from './states/todoState';

const states = {
    todoState: todoState,
};

ReactDOM.render(
    <Provider {...states}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
