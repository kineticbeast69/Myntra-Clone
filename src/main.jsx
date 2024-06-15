import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Bag from "./components/bag.jsx";
import "./index.css";
import Errorpage from "./components/errorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
