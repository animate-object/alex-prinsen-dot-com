import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { App } from './modules/app';
import { Provider } from 'react-redux';
import store from './store';

const Root = () => (
    <Provider store={store}>
        <HashRouter>
            <div className='app-container'>

                <App />
            </div>
        </HashRouter>
    </Provider>
)

ReactDOM.render(
    <Root />, document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
