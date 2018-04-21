import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav.jsx';
import App from './app.jsx';


const Root = () => (
    <BrowserRouter>
        <div className='app-container'>
            <Nav />
            <App />
        </div>
    </BrowserRouter>
)

ReactDOM.render(
    <Root />, document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
