import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

ReactDom.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>, 
    document.getElementById('root'));