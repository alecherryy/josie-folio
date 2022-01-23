import { Route, Routes } from "react-router";
import { Route as RouteType} from "../../../interfaces";
import { ROUTES } from "../../../routes";

/**
 * RouteSwitch component
 */
export const RouteSwitch = () => {
  return (
    <Routes>
      {ROUTES.map((route: RouteType, key: number) => (
        <Route
          key={key}
          path={route.path}
          element={<route.element title={route.title} routes={route.routes} />}
        />
      ))}
    </Routes>
  );
};