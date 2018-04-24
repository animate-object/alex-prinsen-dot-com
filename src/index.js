import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import GlobalNav from './components/globalNav/GlobalNav.jsx';
import App from './components/app/App.jsx';
import { Provider } from 'react-redux';
import store from './store';

const Root = () => (
    <Provider store={store}>
        <HashRouter>
            <div className='app-container'>
                <GlobalNav />
                <App />
            </div>
        </HashRouter>
    </Provider>
)

ReactDOM.render(
    <Root />, document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
