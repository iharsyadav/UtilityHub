import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        <main className="min-w-0 flex-1">
          <Navbar />

          <div
            className="
              p-4
              sm:p-6
              lg:p-8

              pb-24
              md:pb-6
            "
          >
            <Outlet />
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
};

export default DashboardLayout;