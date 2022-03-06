import { Blog } from "../components/pages/Blog/Blog";
import { Home } from "../components/pages/Home/Home";
import { Route } from "../interfaces";

export const ROUTES: Route[] = [
  {
    path: '/',
    element: Home,
    title: 'Homepage'
  },
  {
    path: '/blog',
    exact: true,
    element: Blog,
    title: 'Blog'
  }
];