import routes, { routeType } from "./routes";

import { BrowserRouter,useRoutes,Routes,Route } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import Test from "@/pages/test";
import Product from "@/pages/product";
import Interview from '@/pages/interview'
import Detail from '@/pages/detail'
function Router() {
  let routes = [
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/test",
      element: <Test></Test>,
    },
    {
      path: "/product",
      element: <Product></Product>,
    },
    {
      path: "/detail/:id",
      element: <Detail></Detail>,
    },
    {
      path:"/interview",
      element:<Interview></Interview>,
    },
    
  ];
  
  return (
    <BrowserRouter>
    <Routes>
      {
        routes.map((item)=>{
          return <Route path={item.path} element={item.element} key={item.path}></Route>
        })
      }
    </Routes>
  </BrowserRouter>
  );
}

export default Router;
