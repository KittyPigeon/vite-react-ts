export interface routeType {
  path: string;
  component?: any;
  children?: Array<routeType>;
  meta?: {
    title?: string;
    needLogin?: boolean;
    auth?: Array<string>;
  };
  redirect?: string;
}

const routes: Array<routeType> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/pages/home"),
    meta: {
      title: "首页",
      auth: [],
    },
  },
  {
    path: "/test",
    component: () => import("@/pages/test"),
    meta: {
      title: "测试",
    },
  },
];

export default routes;
