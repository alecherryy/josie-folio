// interface for React routes
export type Route = {
  path: string | string[];
  key?: string;
  title: string;
  component: any;
  exact?: boolean;
  routes?: Route[];
}
