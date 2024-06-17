import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import Bag from "./components/bag.jsx";
import "./index.css";
import Errorpage from "./components/errorPage.jsx";
import { Provider } from "react-redux";
import Home from "./routes/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
