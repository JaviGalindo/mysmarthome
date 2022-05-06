import * as React from 'react';
import Box from '@mui/material/Box';

import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import visitors from '../visitors';
import rooms from '../rooms';


const Menu = ({ dense = false }: MenuProps) => {
    const [open] = useSidebarState();


    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />

            <MenuItemLink
                to="/customers"
                state={{ _scrollToTop: true }}
                primaryText="Devices"
                leftIcon={<visitors.icon />}
                dense={dense}
            />
            <MenuItemLink
                to="/rooms"
                state={{ _scrollToTop: true }}
                primaryText="Rooms"
                leftIcon={<rooms.icon />}
                dense={dense}
            />
        </Box>
    );
};

export default Menu;
