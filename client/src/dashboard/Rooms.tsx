import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';

import {
    ReferenceField,
    FunctionField,
    useGetList,
    useIsDataLoaded,
} from 'react-admin';

import CardWithIcon from './CardWithIcon';
import StarRatingField from '../rooms/StarRatingField';
import { Customer, Room } from '../types';

const Rooms = () => {
    const { data: rooms, total, isLoading } = useGetList<Room>('reviews', {
        filter: { status: 'pending' },
        sort: { field: 'date', order: 'DESC' },
        pagination: { page: 1, perPage: 100 },
    });

    // Poor man's Suspense: hide the content until all the data is loaded,
    // including the reference customers.
    // As ReferenceField aggregates the calls to reference customers,
    // if the first customer is loaded, then all the customers are loaded.
    const isCustomerDataLoaded = useIsDataLoaded(
        ['customers', 'getMany', { ids: [String(rooms?.[0].customer_id)] }],
        { enabled: !isLoading && rooms && rooms.length > 0 }
    );
    const display = isLoading || !isCustomerDataLoaded ? 'none' : 'block';

    return (
        <CardWithIcon
            to="/Rooms"
            icon={CommentIcon}
            title="ROOMS"
            subtitle={total}
        >
            <List sx={{ display }}>
                {rooms?.map((record: Room) => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/Rooms/${record.id}`}
                        alignItems="flex-start"
                    >
                        <ListItemAvatar>
                            <ReferenceField
                                record={record}
                                source="customer_id"
                                reference="customers"
                                link={false}
                            >
                                <FunctionField
                                    render={(customer: Customer) => (
                                        <Avatar
                                            src={`${customer.avatar}?size=32x32`}
                                            sx={{
                                                bgcolor: 'background.paper',
                                            }}
                                        />
                                    )}
                                />
                            </ReferenceField>
                        </ListItemAvatar>

                        <ListItemText
                            primary={<StarRatingField record={record} />}
                            secondary={record.comment}
                            sx={{
                                overflowY: 'hidden',
                                height: '4em',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                paddingRight: 0,
                            }}
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
