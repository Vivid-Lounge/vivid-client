import React from "react";
import MainPage from "./pages/MainPage";
import theme from "../../shared/themes/theme";
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const Club: React.FC = () => {

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default Club