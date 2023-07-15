/** @format */

import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { routes } from "./routes";

function App() {
     const location = useLocation();
     const element = useRoutes(routes);
     if (!element) {
          return null;
     }

     return (
          <>
               {React.cloneElement(element, { key: location.pathname })}
               <ToastContainer />
          </>
     );
}

export default App;
