import { useState } from "react";
import { Box } from "@mui/material";
import { DashboardNavbar } from "./dashboard-navbar";
import { DashboardSidebar } from "./dashboard-sidebar";
import { styled } from "@mui/system";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
        paddingLeft: 280
    }
}));


export interface IDashboardLayout {
    children: any
}


export const DashboardLayout = (props: IDashboardLayout) => {
    const { children } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    return (
        <div>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: "flex",
                        flex: "1 1 auto",
                        flexDirection: "column",
                        width: "100%"
                    }}
                >
                    {children}
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
            <DashboardSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
        </div>
    )
};