import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const pathname = location?.pathname;

  const routes = [
    { href: "/", label: "Home", active: pathname === "/" },
    {
      href: "/events",
      label: "Events",
      active: pathname.startsWith("/events"),
    },
    {
      href: "/add-event",
      label: "Add Event",
      active: pathname.startsWith("/add-event"),
    },
    {
      href: "/my-events",
      label: "My Events",
      active: pathname.startsWith("/my-events"),
    },
  ];

  const handleLogout = () => logOut();

  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <nav className="w-11/12 mx-auto max-w-[1400px] dark:border-gray-700">
        <div className="flex h-[72px] items-center justify-between">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-gray-600 via-black/70 to-slate-700 text-transparent bg-clip-text hover:opacity-90 transition"
          >
            Event Loop
          </Link>

          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
              {routes?.map((route) => (
                <Link
                  key={route?.href}
                  to={route?.href}
                  className={`relative px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                    route?.active
                      ? "text-primary-600 dark:text-primary-400 font-semibold"
                      : ""
                  }`}
                >
                  {route?.label}
                  {route?.active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side: Auth buttons or User Dropdown */}
            <div className="flex items-center space-x-4">
              {!user && (
                <Link to="/login">
                  <Button size="sm" className={"cursor-pointer text-xs"}>
                    Sign In
                  </Button>
                </Link>
              )}

              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-9 w-9 rounded-full p-0"
                    >
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src={user?.photoURL || "/placeholder.svg"}
                          alt={user?.name || "User"}
                          referrerPolicy="no-referrer"
                        />
                        <AvatarFallback>
                          {user?.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1 px-2">
                        <p className="text-xs font-medium">
                          {user?.name || "User"}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-destructive focus:text-destructive font-medium px-4"
                      onClick={handleLogout}
                    >
                      <LogOut className="text-destructive mt-[3px] h-4 w-4" />{" "}
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
