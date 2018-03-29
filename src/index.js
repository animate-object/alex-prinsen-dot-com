import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash/splash.jsx';
import Maggie from './maggie/maggie.jsx';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Maggie />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
