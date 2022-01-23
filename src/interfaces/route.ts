// interface for React routes
export interface Route {
  path: string | string[];
  key?: string;
  title: string;
  component: any;
  exact?: boolean;
  routes?: this[];
}
