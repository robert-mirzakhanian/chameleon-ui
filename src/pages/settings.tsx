import { NextPage } from "next";
import { Box, Button, Typography } from "@mui/material"
import { wrapper } from "../store/app-store";
import { setBreadcrumbs, setPageName } from "../store/general-slice";
import { useDispatch } from "react-redux";

const Settings: NextPage = () => {
    const dispatch = useDispatch();
    return (
        <Box>
            <Typography>Settings</Typography>
        </Box>
    )
}

export default Settings;


export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ params }) => {
            store.dispatch(setPageName("Settings"));
            store.dispatch(setBreadcrumbs(["Settings"]))
            return {
                props: {}
            };
        }
);