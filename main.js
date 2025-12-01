import { Router } from "@tortoise-code-z/shell-io/src/shell-io.js";
import Home from "./src/pages/Home";
import ProjectDetail from "./src/pages/ProjectDetail";
import DefaultLayout from "./src/Layouts/DefaultLayout";
import { ProductDetailLayout } from "./src/Layouts/ProductDetailLayout";

export const router = new Router({
    rootSelector: "#app",
    defaultLayout: DefaultLayout,
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
