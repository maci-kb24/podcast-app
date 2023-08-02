import Layout from "../layout/Layout";
import Home from "../routes/home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const Podcast = () => <RouterProvider router={router} />;

export default Podcast;
