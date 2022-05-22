import * as React from 'react';
import { Link, TextField, useRecordContext } from 'react-admin';


const RoomLinkField = () => {
    const record = useRecordContext();
    if (!record) {
        return null;
    }
    return (
        <Link to={`/rooms/${record.id}`}>
            <TextField source={record.name}/>
        </Link>
    );
};

RoomLinkField.defaultProps = {
    source: 'room_id',
};

export default RoomLinkField;
