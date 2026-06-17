import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Dashboard from "../pages/Dashboard";
import Utilities from "../pages/Utilities";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

import DashboardLayout from "../components/layout/DashboardLayout";

import PasswordPage from "../pages/PasswordPage";
import GlassmorphismGenerator from "../pages/GlassmorphismGenerator";
import Generator from "../pages/Generatordefault";
import Generatordefault from "../pages/Generatordefault";
import Clay from "../components/clay/Clay";

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
          },

          {
            path: "utilities/password",
            element: <PasswordPage />,
          },
           {
            path: "utilities/generator",
            element: <Generatordefault />,
          },
            {
            path: "utilities/clay",
            element: <Clay/>,
          },


          {
            path: "utilities/glassmorphism",
            element: <GlassmorphismGenerator />,
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