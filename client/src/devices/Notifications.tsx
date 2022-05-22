import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link, useGetManyReference, useRecordContext, EditButton } from 'react-admin';

import { Device, Notification } from '../types';


export const TableCellRight = styled(TableCell)({ textAlign: 'right' });

const Notifications = () => {
    const record = useRecordContext<Device>();

    const { isLoading, data: notifications } = useGetManyReference<Notification>(
        'notifications',
        { 
            target: 'deviceId',
            id: record.id,
            pagination: { page: 1, perPage: 10 }
        },
    );

    const filteredNotifications = notifications?.filter(notification => notification.deviceId === record.id)

    if (isLoading || !record || !filteredNotifications?.length) return null;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        NotificationId
                    </TableCell>
                    <TableCellRight>
                        Config
                    </TableCellRight>
                    <TableCellRight>
                        AuthId
                    </TableCellRight>
                    <TableCellRight>
                        Actions
                    </TableCellRight>
                </TableRow>
            </TableHead>
            <TableBody>
                {notifications?.map((item: any) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <Link to={`/notifications/${item.id}`}>
                                {item.id}
                            </Link>
                        </TableCell>
                        <TableCellRight>
                            {JSON.stringify(item.config)}
                        </TableCellRight>
                        <TableCellRight>{item.subscriptionAuth}</TableCellRight>
                        <TableCellRight>{<EditButton record={item} resource="notifications"/>}</TableCellRight>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Notifications;
