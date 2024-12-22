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
import PrivateRoute from "../authentication/Private/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-service",
        element: (
          <PrivateRoute>
            <ManageService />
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoute>
            <BookedServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-to-do",
        element: (
          <PrivateRoute>
            <ServiceToDo />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
