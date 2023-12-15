import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import SIgnUp from "../components/SIgnUp";
// import PrivatRouter from "../PrivetRouter/PrivatRouter";
import UpdateProfile from "../pages/dashbord/UpdateProfile";
import Cartpage from "../pages/shop/Cartpage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element:   <Menu />
      },
      {
        path: "/cart-page",
        element:  <Cartpage/>
      },
      {
        path: "/update-profile",
        element: <UpdateProfile/>
      }

    ],
  },
  {
    path: "/signup",
    element: <SIgnUp />
  }

]);

export default router