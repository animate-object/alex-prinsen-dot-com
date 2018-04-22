import React from 'react';
import ReactDOM from 'react-dom';
import Splash from '../splash/Splash.jsx';
import Maggie from '../maggie/Maggie.jsx';
import About from '../about/About.jsx';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
    render() {
        return (
            <main className='content-container'>
                <Switch>
                    <Route exact path='/maggie' component={Maggie} />
                    <Route exact path='/' component={Splash} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </main>
        )
    }
}

