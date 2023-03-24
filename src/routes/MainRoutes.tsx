import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundt from "../pages/NotFoundt";
import UserDetail from "../pages/UserDetail";
import Users from "../pages/Users";

//tive que colocar no caminho react-blog-json pois sem isso daria erro no deploy no github pages
export const MainRoutes = () => {
  return useRoutes([
    { path: "/react-blog-json", element: <Home /> },
    { path: "react-blog-json/users", element: <Users /> },
    { path: "react-blog-json/users/:id", element: <UserDetail /> },
    { path: "/*", element: <NotFoundt /> },
  ]);
};
