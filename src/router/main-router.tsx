import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, ErrorPage, Events, Home, News, Volunterrs } from "../pages";
import { Login, Register } from "../components/auth";
import AdminLayout from "../layout/dashboard";
import AdminDashboard from "../pages-dashboard";

export const router = createBrowserRouter([

//landing page uchun routing
{
  path: "/",
  element: <App />, 
  children: [
    { index: true, element: <Home /> }, 
    { path: "/about-page", element: <About /> },
    { path: "/events-page", element: <Events /> },
    { path: "/news-page", element: <News /> },
    { path: "/volunterrs-page", element: <Volunterrs /> },
  ],
},

{ path: "/register", element: <Register /> },
{ path: "/login", element: <Login /> },
{ path: "*", element: <ErrorPage /> },



//adminka uchun routing
{
  path: "/dashboard",
  element: <AdminLayout/>,
  children: [
    { index: true, element: <AdminDashboard/>}
  ]
},

])