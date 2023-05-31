import { useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { styled } from "@mui/system";
import { theme } from "../theme/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectGeneralState } from "../store/general-slice";


function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      cursor: "pointer",
      height: 40,
      width: 40,
      ml: 1,
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const DashboardNavbarRoot = styled(AppBar)({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
});


type DashboardNavbarProps = {
  onSidebarOpen?: (...args: any[]) => any
};


export const DashboardNavbar: React.FC<DashboardNavbarProps> = props => {
  const generalState = useSelector(selectGeneralState);
  const dispatch = useDispatch();

  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  return (
    <DashboardNavbarRoot
      sx={{
        left: {
          lg: 280
        },
        width: {
          lg: "calc(100% - 280px)"
        }
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: "inline-flex",
              lg: "none"
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Box>
          <Breadcrumbs>
            {generalState.breadcrumbs.map((breadcrumb, index) => <Typography key={index}>{breadcrumb}</Typography>)}
          </Breadcrumbs>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Notifications">
          <IconButton sx={{ ml: 1 }}>
            <Badge badgeContent={4} color="primary" variant="dot">
              <BellIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Avatar
          // onClick={() => setOpenAccountPopover(true)}
          //   ref={settingsRef}
          {...stringAvatar("Robert Mirzakhanyan")}
        />
      </Toolbar>
      {/* <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      /> */}
    </DashboardNavbarRoot>
  );
};


