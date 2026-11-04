import type { RouteObject } from "react-router-dom";
import Layout from "@/components/feature/Layout";
import Home from "@/pages/home/page";
import About from "@/pages/about/page";
import ProjectsIndex from "@/pages/projects/page";
import ProjectSlugRoute from "@/pages/projects/slug/page";
import Business from "@/pages/business/page";
import Contact from "@/pages/contact/page";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <ProjectsIndex />,
      },
      {
        path: "projects/:slug",
        element: <ProjectSlugRoute />,
      },
      {
        path: "business",
        element: <Business />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;