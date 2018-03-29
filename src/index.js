import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './splash/splash.jsx';


class App extends React.Component {
    render() {
        return (
            <div>
                <Splash />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module.hot) { module.hot.accept(); }
