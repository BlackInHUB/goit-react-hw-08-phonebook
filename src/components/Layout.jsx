import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "utils/Box";
import { Appbar } from "./Appbar/Appbar";
import { ThreeCirclesLoader } from "./Loaders/ThreeCirclesLoader";

export const Layout = () => {
    return (
        <Box as="header" p={4}>
            <Appbar />
            <Suspense fallback={<ThreeCirclesLoader />}>
                <Outlet />
            </Suspense>
        </Box>
    )
}