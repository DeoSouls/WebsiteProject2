import React from 'react';
import styles from '../CssModules/App.module.css';
import Main from './Main/Main';
import Registration from './Registration/Registration';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Auth } from './Auth/Auth';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.styleComponent = styles.main_title;
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(BrowserRouter, null,
                React.createElement(Routes, null,
                    React.createElement(Route, { path: '/', element: React.createElement(Main, null) }),
                    React.createElement(Route, { path: '/auth', element: React.createElement(Auth, null) }),
                    React.createElement(Route, { path: '/register', element: React.createElement(Registration, null) })))));
    }
}
export default App;
