import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
const Overview = lazy(() => import("../pages/Overview/Overview"))
const CreateBuild = lazy(() => import("../pages/CreateBuild/CreateBuild"));
const EdgeTrain = lazy(() => import("../pages/EdgeTrain/EdgeTrain"));   

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children: [
            {index:true, element:<Navigate to="/build/overview" replace />},
            {path: "build/overview", element:<Overview />},
            {path: "build/create", element:<CreateBuild />},
            {path: "build/edgetrain", element:<EdgeTrain />},
        ],
    },
]);