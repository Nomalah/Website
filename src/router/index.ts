import HomeView from "@/views/HomeView.vue";

export const routes = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/about",
        component: () => import("@/views/AboutView.vue"),
    },
    {
        path: "/portfolio",
        component: () => import("@/views/PortfolioView.vue"),
    },
];
