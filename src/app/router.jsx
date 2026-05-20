import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Dashboard from "../pages/Dashboard";
import Utilities from "../pages/Utilities";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";

import NotFound from "../pages/NotFound";

import DashboardLayout from "../components/layout/DashboardLayout";
import PasswordPage from "../pages/PasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        element: <DashboardLayout />,

        children: [
          {
            index: true,
            element: <Dashboard />,
          },

          {
            path: "utilities",
            element: <Utilities />,
            children: [
              {
                path: "utilities/password",
                element: <PasswordPage />,
              },
            ],
          },
          {
            path: "utilities/password",
            element: <PasswordPage />,
          },

          {
            path: "favorites",
            element: <Favorites />,
          },

          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
