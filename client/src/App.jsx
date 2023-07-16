/** @format */

import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import Login from "./pages/Login";
import { routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

function App() {
     const location = useLocation();
     const element = useRoutes(routes);
     if (!element) {
          return null;
     }

     return (
          <>
               {React.cloneElement(element, { key: location.pathname })}
               <Toaster />
          </>
     );
}

export default App;
