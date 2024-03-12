import React from "react";
import { createBrowserRouter, Route, Link } from "react-router-dom";
import { Home } from "../views/home/index";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
