import { Blog } from "../components/pages/Blog/Blog";
import { Home } from "../components/pages/Home/Home";
import { Post } from "../components/pages/Post/Post";
import { Route } from "../interfaces";

export const ROUTES: Route[] = [
  {
    path: '/',
    element: Home,
    title: 'Homepage'
  },
  {
    path: '/blog/:postTitle',
    element: Post,
    title: 'Blog Post'
  },
  {
    path: '/blog',
    exact: true,
    element: Blog,
    title: 'Blog'
  }
];