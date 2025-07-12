import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import projectroute from "./components/projectRoute";

// console.log(React);
// console.log(ReactDOM);
var root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

root.render(projectroute);