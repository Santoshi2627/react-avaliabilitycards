import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import {Sample} from './Sample.js';
// import Main from './classcomp.jsx';
// import Home from "./home.jsx";
// import Header from "./portfolioheader.jsx";
// import Main from "./portfoliomain.jsx";

// import Home from "./portfoliohome.jsx";
import {ProductHome} from "./reacttasks/conditionalhome"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/> */}
    {/* <Main/> */}
    {/* <Home /> */}
    {/* <Main/> */}
    {/* <Home/> */}
    <ProductHome/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
