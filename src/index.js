import React from 'react';
import ReactDOM from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.json'
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRountingOne';
import Loginformik from './components/pure/forms/log';
import TaskListComponent from './components/containers/task_list';
import AxiosChuck from './components/pure/forms/axiosChuck';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRoutingOne/> */}
    {/* <TaskListComponent></TaskListComponent> */}
    <AxiosChuck></AxiosChuck>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
