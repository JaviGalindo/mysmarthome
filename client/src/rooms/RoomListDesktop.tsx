import * as React from 'react';
import {
    Identifier,
    Datagrid,
    TextField,
} from 'react-admin';


import rowStyle from './rowStyle';


export interface RoomListDesktopProps {
    selectedRow?: Identifier;
}



const RoomListDesktop = ({ selectedRow }: RoomListDesktopProps) => (
    <Datagrid
        rowClick="edit"
        rowStyle={rowStyle(selectedRow)}
        optimized
        sx={{
            '& .RaDatagrid-thead': {
                borderLeftColor: 'transparent',
                borderLeftWidth: 5,
                borderLeftStyle: 'solid',
            },
            '& .column-comment': {
                maxWidth: '18em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            },
        }}
    >
        <TextField source="id" />
        <TextField source="name"/>
    </Datagrid>
);

export default RoomListDesktop;
