import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './CSS/index.css';
import App from './JS/App';
const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>

)

ReactDOM.render(app, document.getElementById('root'));
