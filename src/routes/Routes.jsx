import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from '../Login/Login'
import Register from "../Login/Register";
import AddToyPage from "../AddToy/AddToy";
import Blog from "../Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/addToy',
        element: <AddToyPage></AddToyPage>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

export default router;