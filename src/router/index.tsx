import routes, { routeType } from './routes';

import { useRoutes } from "react-router-dom";
import Home from '@/pages/home'
import About from '@/pages/about'
import Test from '@/pages/test'
function Router() {
  let element = useRoutes([{
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/test",
    element: <Test></Test>
  }
  ]);

  return element;
}

export default Router