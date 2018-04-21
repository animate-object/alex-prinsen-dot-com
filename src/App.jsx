import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash/splash.jsx';
import Maggie from './maggie/maggie.jsx';
import About from './about/about.jsx';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/maggie' component={Maggie} />
                    <Route exact path='/' component={Splash} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </main>
        )
    }
}

