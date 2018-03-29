import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash/splash.jsx';
import Maggie from './maggie/maggie.jsx';
import './index.css';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Header />
                <Main />
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/maggie' component={Maggie} />
                    <Route exact path='/' component={Splash} />
                </Switch>
            </main>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/maggie'>Meow</Link></li>
                    </ul>
                </nav>
            </header>
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
