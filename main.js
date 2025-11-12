import { Router } from "shell-io";

import Home from "./src/pages/Home";
import ProjectDetail from "./src/pages/ProjectDetail";
import Layout, { ProductDetailLayout } from "./src/components/Layout";

export const router = new Router({
    rootSelector: "#app",
    defaultLayout: Layout,
});

const routes = [
    {
        pathname: `/`,
        component: Home,
    },

    {
        pathname: `/project-detail/:id`,
        component: ProjectDetail,
        options: {
            layout: ProductDetailLayout,
        },
    },
];

router.init(routes);
