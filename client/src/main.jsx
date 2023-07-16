/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import authReducer from "./store/reducer/authReducer.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.js";
import ReduxThunk from "redux-thunk";

const Store = configureStore(
     {
          reducer: {
               user: authReducer,
          },
     },
     applyMiddleware(ReduxThunk),
);

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <BrowserRouter>
               <ThemeProvider theme={theme}>
                    <Provider store={Store}>
                         <App />
                    </Provider>
               </ThemeProvider>
          </BrowserRouter>
     </React.StrictMode>,
);
