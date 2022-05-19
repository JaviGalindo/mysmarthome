import * as React from 'react';
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import { Link } from 'react-router-dom';

import {
    useGetList,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';
import { Device } from '../types';

const Devices = () => {
    const { data: rooms, total } = useGetList<Device>('devices', {
        filter: { status: 'pending' },
        sort: { field: 'date', order: 'DESC' },
        pagination: { page: 1, perPage: 100 },
    });

    return (
        <CardWithIcon
            to="/Devices"
            icon={DevicesIcon}
            title="DEVICES"
            subtitle={total}
        >
            <List>
                {rooms?.map((record: Device) => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/Devices/${record.id}`}
                        alignItems="flex-start"
                    >
                        <ListItemText
                                  primary={`${record.id}`}
                              />
                        <ListItemText
                                  primary={`${record.name}`}
                              />
                    </ListItem>
                ))}
            </List>
            <Box flexGrow={1}>&nbsp;</Box>
            <Button
                sx={{ borderRadius: 0 }}
                component={Link}
                to="/Devices"
                size="small"
                color="primary"
            >
                <Box p={1} sx={{ color: 'primary.main' }}>
                    All Devices
                </Box>
            </Button>
        </CardWithIcon>
    );
};

export default Devices;
