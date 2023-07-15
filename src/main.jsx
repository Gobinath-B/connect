/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import authReducer from "./store/reducer/authReducer.js";

const Store = configureStore(
     {
          reducer: {
               user: authReducer,
          },
     },
     // applyMiddleware(),
);

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <BrowserRouter>
               <Provider store={Store}>
                    <App />
               </Provider>
          </BrowserRouter>
     </React.StrictMode>,
);
