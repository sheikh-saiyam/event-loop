import HomeLayout from "@/layouts/HomeLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
