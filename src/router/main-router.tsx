import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, ErrorPage, Events, Home, News, Tariximiz, VolonyorlikNima, Volunterrs, VolunterrsImages, VolunterrsTeam } from "../pages";
import { Login, Register } from "../components/auth";
import AdminLayout from "../layout/dashboard";
import AdminDashboard from "../pages-dashboard";
import InvestorPage from "@/pages/investor-page";
import DonationPage from "@/pages/donation-page";
import SinglePage from "@/pages/single-page";
// import ProfileVolunterr from "@/pages/profile-volunter";
import ProfileInvestor from "@/pages/profile-investor";
// import { PrivateRoute } from "./privete-route";
import VolunterUserProfile from "@/components/sections/volunterr-user-profile";
import ProfileVolunterrEdit from "@/components/sections/profile-volunterr-edit";


export const router = createBrowserRouter([

  //landing page uchun routing
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <About /> },
      { path: "/home-page", element: <Home /> },
      { path: "/events-page", element: <Events /> },
      { path: "/news-page", element: <News /> },
      { path: "/volunterrs-page", element: <Volunterrs /> },
      { path: "/tariximiz", element: <Tariximiz /> },
      { path: "/jamoamiz", element: <VolunterrsTeam /> },
      { path: "/rasmlar", element: <VolunterrsImages /> },
      { path: "/volontyorlik-nima", element: <VolonyorlikNima /> },
      { path: "/investor-page", element: <InvestorPage /> },
      { path: "/donation-page", element: <DonationPage /> },
      { path: "/single-page/:id", element: <SinglePage /> },
      { path: "/profile-edit", element: <ProfileVolunterrEdit/>},
      {
        path: "/profile-volunter",
        element: (
            <VolunterUserProfile />
        ),
      },
      {
        path: "/profile-investor",
        element: (
            <ProfileInvestor />
        ),
      }

      // 🔐 Himoyalangan sahifalar:
      // {
      //   path: "/profile-volunter",
      //   element: <PrivateRoute><ProfileVolunterr /></PrivateRoute>
      // },
      // {
      //   path: "/profile-investor",
      //   element: <PrivateRoute><ProfileInvestor /></PrivateRoute>
      // },
      // {
      //   path: "/profile-edit",
      //   element: <PrivateRoute><ProfileVolunterrEdit /></PrivateRoute>
      // }
    ],
  },

  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <ErrorPage /> },

  //adminka uchun routing
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> }
    ]
  },
])