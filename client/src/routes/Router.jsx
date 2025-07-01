import HomeLayout from "@/layouts/HomeLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import AddEvents from "@/pages/Events/AddEvents";
import { Route, Routes } from "react-router-dom";
import MyEvents from "@/pages/Events/MyEvents";
import Events from "@/pages/Events/Events";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-event"
          element={
            <PrivateRoute>
              <AddEvents />
            </PrivateRoute>
          }
        />
        <Route
          path="/my-events"
          element={
            <PrivateRoute>
              <MyEvents />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
