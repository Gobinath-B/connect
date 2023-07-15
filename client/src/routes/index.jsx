/** @format */

import Login from "../pages/Login";
import { useRoutes } from "react-router-dom";
import Register from "../pages/Register";
import { Home } from "../pages/Home";
import Careers from "../pages/Careers";
import Finance from "../pages/Finance";
import Chats from "../pages/Chats";
import Emergency from "../pages/Emergency";

export const routes = [
     {
          path: "/",
          element: <Login />,
     },
     {
          path: "/register",
          element: <Register />,
     },
     {
          path: "/home",
          element: <Home />,
     },
     {
          path: "/careers",
          element: <Careers />,
     },
     {
          path: "/finance",
          element: <Finance />,
     },
     {
          path: "/chats",
          element: <Chats />,
     },
     {
          path: "/emergency",
          element: <Emergency />,
     },
];
