import * as React from 'react';
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';

import {
    useGetList,
    useIsDataLoaded,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';
//import StarRatingField from '../rooms/StarRatingField';
import { Customer, Room } from '../types';

const Rooms = () => {
    const { data: rooms, total, isLoading } = useGetList<Room>('rooms', {
        filter: { status: 'pending' },
        sort: { field: 'date', order: 'DESC' },
        pagination: { page: 1, perPage: 100 },
    });

    // Poor man's Suspense: hide the content until all the data is loaded,
    // including the reference customers.
    // As ReferenceField aggregates the calls to reference customers,
    // if the first customer is loaded, then all the customers are loaded.
    // const isCustomerDataLoaded = useIsDataLoaded(
    //     ['customers', 'getMany', { ids: [String(rooms?.[0].customer_id)] }],
    //     { enabled: !isLoading && rooms && rooms.length > 0 }
    // );
    // const display = isLoading || !isCustomerDataLoaded ? 'none' : 'block';

    return (
        <CardWithIcon
            to="/Rooms"
            icon={CommentIcon}
            title="ROOMS"
            subtitle={total}
        >
            <List>
                {rooms?.map((record: Room) => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/Rooms/${record.id}`}
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
                to="/Rooms"
                size="small"
                color="primary"
            >
                <Box p={1} sx={{ color: 'primary.main' }}>
                    All Rooms
                </Box>
            </Button>
        </CardWithIcon>
    );
};

export default Rooms;
