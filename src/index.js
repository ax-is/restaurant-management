import "./index.css";
import App from "./App";
import React from "react";
import store from './store/store';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();