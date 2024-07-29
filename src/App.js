import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import Flights from "./pages/Flights";
import Upcoming from "./components/Upcoming";
import Completed from "./components/Completed";
import NewFlight from "./pages/NewFlight";
import FlightDetailsOne from "./components/FlightDetailsOne";
import Schedule from "./components/Schedule";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Dashboard /> },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/flights",
        element: <Flights />,
        children: [
          { index: true, element: <Upcoming /> },
          {
            path: "upcoming",
            element: <Upcoming />,
          },
          {
            path: "completed",
            element: <Completed />,
          },
          {
            path: "real-time-tracking",
            element: <Completed />,
          },
          {
            path: "add-flights",
            element: <NewFlight />,
            children: [
              { index: true, element: <FlightDetailsOne /> },
              {
                path: "flight-details",
                element: <FlightDetailsOne />,
              },
              {
                path: "schedule",
                element: <Schedule />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
