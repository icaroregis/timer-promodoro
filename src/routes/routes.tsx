import { Routes as Routers, Route } from "react-router-dom";
import { Home } from "../pages";
import { History } from "../pages";
import { DefaultLayout } from "../layouts";

export function Routes() {
  return (
    <Routers>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routers>
  );
}
