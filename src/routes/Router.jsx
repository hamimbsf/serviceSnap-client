import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllServices from "../pages/AllServices";
import ServiceDetails from "../pages/ServiceDetails";
import AddServices from "../pages/AddServices";
import { ServiceToDo } from "../pages/ServiceToDo";
import ManageService from "../pages/ManageService";
import BookedServices from "../pages/BookedServices";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import ForgetPass from "../authentication/ForgetPass";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgetPass />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/services/details",
        element: <ServiceDetails />,
      },
      {
        path: "/add-services",
        element: <AddServices />,
      },
      {
        path: "/manage-service",
        element: <ManageService />,
      },
      {
        path: "/booked-services",
        element: <BookedServices />,
      },
      {
        path: "/service-to-do",
        element: <ServiceToDo />,
      },
    ],
  },
]);
export default router;
