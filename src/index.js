import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import Routes from './routes';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
    <Routes>
    <App />
    </Routes>
    </HashRouter>
    , document.getElementById('root'));
// registerServiceWorker();
