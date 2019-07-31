import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from "./routes";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

const App = props => {
    return (
        <BrowserRouter>
            <Routes {...props} />
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
