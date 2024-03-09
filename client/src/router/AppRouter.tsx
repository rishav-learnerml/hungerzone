import Layout from "@/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 Not Found!</h1>,
    children: [
      {
        index: true,
        element: <h1>Hello!</h1>,
      },
    ],
  },
]);

export default AppRouter;
