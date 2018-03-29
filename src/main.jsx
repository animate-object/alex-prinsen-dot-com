import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash/splash.jsx';
import Maggie from './maggie/maggie.jsx';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


export default class Main extends React.Component {
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

