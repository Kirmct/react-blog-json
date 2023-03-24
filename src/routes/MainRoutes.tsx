import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";
import Users from "../pages/Users";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/react-blog-json", element: <Home /> },
    { path: "react-blog-json/users", element: <Users /> },
    { path: "/users/:id", element: <UserDetail /> },
  ]);
};
