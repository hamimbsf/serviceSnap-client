import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import router from "./routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvder.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </AuthProvider>
  </React.StrictMode>
);
