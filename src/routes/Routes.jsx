import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from '../Login/Login'
import Register from "../Login/Register";
import AddToy from "../AddToy/AddToy";
import SingleToy from "../Toy/Toy";
import Blog from "../Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import UpdateToys from "../updateToys/UpdateToys";


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
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toys/:id',
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "updatetoys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

export default router;