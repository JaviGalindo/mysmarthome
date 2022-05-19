import * as React from 'react';
import {
    useGetList,
    Link
} from 'react-admin';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { User } from '../types';






const UserList = () => {
    const { data, isLoading } = useGetList<User>("users",  { 
        pagination: { page: 1, perPage: 10 },
        sort: { field: 'published_at', order: 'DESC' }
    });
    if (isLoading || !data) return null;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        UserId
                    </TableCell>
                    <TableCell>
                        username
                    </TableCell>
                    <TableCell>
                        email
                    </TableCell>
                    <TableCell>
                        active
                    </TableCell>
                    <TableCell>
                        Edit
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item: any) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <Link to={`/users/${item.id}`}>
                                {item.id}
                            </Link>
                        </TableCell>
                        <TableCell>
                            {item.username}
                        </TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.active === 1 ? "Yes" : "No"}</TableCell>
                        <TableCell>
                            <Link to={`/users/${item.id}`}>
                                Edit
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserList;
