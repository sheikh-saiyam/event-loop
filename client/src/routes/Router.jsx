import HomeLayout from "@/layouts/HomeLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import AddEvents from "@/pages/Events/AddEvents";
import { Route, Routes } from "react-router-dom";
import MyEvents from "@/pages/Events/MyEvents";
import Events from "@/pages/Events/Events";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/add-event" element={<AddEvents />} />
        <Route path="/my-events" element={<MyEvents />} />
      </Route>
    </Routes>
  );
};

export default Router;
