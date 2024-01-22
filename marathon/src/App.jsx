// import { Home } from "./pages/Home.jsx";
import { Event } from "./pages/Event.jsx";
// import {} from "react-error-boundary" // УДАЛИТЬ ЭРОР БОУНДАРИ, ЕСЛИ НЕ НУЖЕН
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.jsx";
import { SingleEvent } from "./pages/SingleEvent/SingleEvent.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      {/* <Route path="event" element={<Event />} /> */}
      <Route path="event/:id" element={<SingleEvent />} />
    </Route>
  )
);

export const App = () => {
  // return <Home />;
  return <RouterProvider router={router} />;
};
