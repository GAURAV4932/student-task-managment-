import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

const DefaultRouter = () => {
  const authData = JSON.parse(localStorage.getItem("loginData"));
  if(authData){
  return<Navigate to = "/dashboard" replace/>;
  }
  return <Navigate to = "/login" replace/>;
}
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRouter/>
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },

    {
      path: "/dashboard",
      element: <Dashboard />,
    }
  ]);

  return <RouterProvider router={route} />;
}
export default App;
