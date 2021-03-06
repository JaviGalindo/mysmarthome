import * as React from 'react';
import Box from '@mui/material/Box';

import {
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import devices from '../devices';
import rooms from '../rooms';
import users from '../users';


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
                to="/rooms"
                state={{ _scrollToTop: true }}
                primaryText="Rooms"
                leftIcon={<rooms.icon />}
                dense={dense}
            />

            <MenuItemLink
                to="/devices"
                state={{ _scrollToTop: true }}
                primaryText="Devices"
                leftIcon={<devices.icon />}
                dense={dense}
            />


            <MenuItemLink
                to="/users"
                state={{ _scrollToTop: true }}
                primaryText="Users"
                leftIcon={<users.icon />}
                dense={dense}
            />

        </Box>
    );
};

export default Menu;
