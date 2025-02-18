import { BaseLayout } from "@/layouts/BaseLayout";
import { Other, Home } from "@/pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="/:path" element={<Other />} />
    </Route>
  )
);
