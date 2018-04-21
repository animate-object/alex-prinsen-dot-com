import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalNav from './components/globalNav/GlobalNav.jsx';
import App from './components/app/App.jsx';
import Provider from 'redux';

const Root = () => (
    <Provider>
        <BrowserRouter>
            <div className='app-container'>
                <GlobalNav />
                <App />
            </div>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <Root />, document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
