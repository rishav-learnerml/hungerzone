import Layout from "@/layouts/Layout";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 Not Found!</h1>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h4>Loading...</h4>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default AppRouter;
