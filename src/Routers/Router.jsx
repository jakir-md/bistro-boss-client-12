import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';

import Home from '../pages/Home/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ],
  }
]);