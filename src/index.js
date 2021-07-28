import React from 'react';
import reactDOM from 'react-dom';
import App from './App'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './assets/css/myportfolio.css'
import './assets/images/port2.jpg'

reactDOM.render(<>
    <div className="container">
        <App />
    </div>
</>,
    document.getElementById('root'))
