/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import axios from 'axios'

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Add a response interceptor
window.axios.interceptors.response.use((response) => {
    return response;
}, (error) => {

    if (error.response && error.response.status == 401) {

    } else if (error.response && error.response.status == 403) {

    } else if (error.response && error.response.status >= 500) {
        alert('server error');
    }
    return Promise.reject(error);
});

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
require('./components/Example');
require('./components/AddCase');
// require('./components/PassData.jsx');
import PassData from "./components/PassData.jsx";
require('./components/Form');
import Main from './components/Main';


