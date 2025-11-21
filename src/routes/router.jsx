import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/sendParcel/SendParcel";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";

import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        element: (
          <PrivateRoutes>
            <Rider></Rider>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoutes>
            {" "}
            <SendParcel></SendParcel>{" "}
          </PrivateRoutes>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: 
      <PrivateRoutes>
    
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ,
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,

      },
    ],
  },
]);
