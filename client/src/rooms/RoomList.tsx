import * as React from 'react';
import { useCallback } from 'react';
import { CreateButton, List } from 'react-admin';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';

import RoomListDesktop from './RoomListDesktop';
//import roomFilters from './roomFilters';
import RoomEdit from './RoomEdit';

const RoomList = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = useCallback(() => {
        navigate('/rooms');
    }, [navigate]);

    const match = matchPath('/rooms/:id', location.pathname);

    return (
        <Box display="flex">
            <List
                sx={{
                    flexGrow: 1,
                    transition: (theme: any) =>
                        theme.transitions.create(['all'], {
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    marginRight: !!match ? '400px' : 0,
                }}
                //filters={roomFilters}
                actions={<CreateButton/ >}
                perPage={25}
                sort={{ field: 'date', order: 'DESC' }}
            >
               
                    <RoomListDesktop
                        selectedRow={
                            !!match
                                ? parseInt((match as any).params.id, 10)
                                : undefined
                        }
                    />
                
            </List>
            <Drawer
                variant="persistent"
                open={!!match}
                anchor="right"
                onClose={handleClose}
                sx={{ zIndex: 100 }}
            >
                {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                {!!match && (
                    <RoomEdit
                        id={(match as any).params.id}
                        onCancel={handleClose}
                    />
                )}
            </Drawer>
        </Box>
    );
};

export default RoomList;
