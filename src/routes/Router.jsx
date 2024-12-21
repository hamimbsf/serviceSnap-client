import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllServices from "../pages/AllServices";
import ServiceDetails from "../pages/ServiceDetails";
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
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/services/details",
        element: <ServiceDetails />,
      },
    ],
  },
]);
export default router;
