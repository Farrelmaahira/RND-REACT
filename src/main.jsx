import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Posts from "./pages/Posts.jsx";

const router = createBrowserRouter([
  {
    path : '/testing',
    element : <div className="">Hello world</div>
  },
  {
    path : '/',
    element : <App />
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/register',
    element : <Register />
  },
  {
    path : '/posts',
    element : <Posts/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
