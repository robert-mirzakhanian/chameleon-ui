import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from "@mui/material";
import { neturalCollor } from "../theme/styled";
import { truncateSync } from "fs";
import { textTransform } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { selectGeneralState, setBreadcrumbs, setPageName } from "../store/general-slice";

type NavItemProps = {
  href: string,
  icon?: React.ReactNode,
  title?: string
};

export const NavItem: React.FC<NavItemProps> = props => {
  const generaleState = useSelector(selectGeneralState);
  const dispatch = useDispatch();
  const { href, icon, title } = props;
  const router = useRouter();
  const active = generaleState.pageName ? generaleState.pageName === title : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2
      }}
    >
        <Button
          component="a"
          href={href}
          startIcon={icon}
          LinkComponent={NextLink}
          sx={{
            backgroundColor: getBackgroundColor(active),
            fontWeight: getFontWeight(active),
            borderRadius: 1,
            color: active ? "secondary.main" : neturalCollor.n3,
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: active ? "secondary.main" : neturalCollor.n4
            },
            "&:hover": {
              backgroundColor: "rgba(255,255,255, 0.08)"
            }
          }}
          onClick={() => {
            dispatch(setPageName(title))
            dispatch(setBreadcrumbs([title]))
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
    </ListItem>
  );
};


function getBackgroundColor(isActive: Boolean): string {
  if (isActive) {
    return "rgba(255,255,255, 0.08)";
  } else {
    return ""
  }
}

function getFontWeight(isActive: Boolean): string {
  if (isActive) {
    return "fontWeightBold";
  } else {
    return "";
  }
}