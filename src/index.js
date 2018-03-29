import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Nav from './nav.jsx';
import Main from './main.jsx';


class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Nav />
                <Main />
            </div>
        )
    }
}

ReactDOM.render(
    (<HashRouter>
        <App />
    </HashRouter>
    ), document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
