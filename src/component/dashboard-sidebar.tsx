import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { NavItem } from './nav-item';
import { neturalCollor } from '../theme/styled';
import { Theme } from '@mui/system';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Stubs'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
];

export interface IDashboardSidebar {
  open: boolean,
  onClose: () => void
}

export const DashboardSidebar = (props: IDashboardSidebar) => {
  const { open, onClose } = props;
  const router = useRouter();
   const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
     defaultMatches: true,
     noSsr: false
   });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
          <Box sx={{
            p: 1,
            pt: 5,
            pl: 7
          }}>
            <Link
              href="/"
              passHref
            >
              <img src='/static/images/newLogo.png' width="150px" height="150px" />
            </Link>
          </Box>
        <Divider
          sx={{
            borderColor: '#0e0c0e',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: neturalCollor.n9,
            color: '#0e0c0e',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: neturalCollor.n9,
          color: '#0e0c0e',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
