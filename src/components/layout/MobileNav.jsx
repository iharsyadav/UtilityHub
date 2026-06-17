import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wrench,
  Heart,
  Settings,
} from "lucide-react";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Utilities",
    path: "/utilities",
    icon: Wrench,
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: Heart,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function MobileNav() {
  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50

        flex
        md:hidden

        border-t
        border-border

        bg-white/90
        backdrop-blur-xl
      "
    >
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex-1"
          >
            {({ isActive }) => (
              <div
                className={`
                  flex flex-col
                  items-center
                  justify-center
                  py-3

                  ${
                    isActive
                      ? "text-primary"
                      : "text-muted"
                  }
                `}
              >
                <Icon size={20} />

                <span className="mt-1 text-xs">
                  {item.title}
                </span>
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}