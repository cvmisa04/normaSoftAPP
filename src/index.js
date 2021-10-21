import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux'
import {store} from "./redux/store"


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


