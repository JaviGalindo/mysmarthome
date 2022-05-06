import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { RecordContextProvider, useListContext } from 'react-admin';

import { RoomItem } from './RoomItem';
import { Room } from '../types';

const RoomListMobile = () => {
    const { data, isLoading, total } = useListContext<Room>();
    if (isLoading || Number(total) === 0) {
        return null;
    }
    return (
        <List sx={{ width: '100vw' }}>
            {data.map(room => (
                <RecordContextProvider value={room} key={room.id}>
                    <RoomItem />
                </RecordContextProvider>
            ))}
        </List>
    );
};

RoomListMobile.propTypes = {
    data: PropTypes.any,
    hasBulkActions: PropTypes.bool.isRequired,
    ids: PropTypes.array,
    onToggleItem: PropTypes.func,
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

RoomListMobile.defaultProps = {
    hasBulkActions: false,
    selectedIds: [],
};

export default RoomListMobile;
