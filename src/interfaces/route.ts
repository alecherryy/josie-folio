import { ReactNode } from "react"
import { PathRouteProps } from "react-router"

// interface for React routes
type RouteProps = PathRouteProps;
type RequiredProps = Required<Pick<RouteProps, 'path'>>;
export type Route = RequiredProps & {
  key?: string;
  title: string;
  routes?: Route[];
  element: React.ElementType
}
