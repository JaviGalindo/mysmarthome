import * as React from 'react';
import {
    BooleanField,
    CreateButton,
    Datagrid,
    DateField,
    DateInput,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceField,
    SearchInput,
    TextField,
} from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';

import SegmentsField from './SegmentsField';
import SegmentInput from './SegmentInput';
import RoomLinkField from './RoomLinkField';
import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';
import DeviceListAside from './DeviceListAside';

const deviceFilters = [
    <SearchInput source="q" alwaysOn />,
    <DateInput source="last_seen_gte" />,
    <NullableBooleanInput source="has_ordered" />,
    <NullableBooleanInput source="has_newsletter" defaultValue />,
    <SegmentInput source="groups" />,
];

const DeviceList = () => {
    const isXsmall = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery<Theme>(theme => theme.breakpoints.down('md'));
    return (
        <List
            filters={isSmall ? deviceFilters : undefined}
            sort={{ field: 'id', order: 'DESC' }}
            actions={<CreateButton/ >}
            perPage={25}
            aside={<DeviceListAside />}
        >
            {isXsmall ? (
                <MobileGrid />
            ) : (
                <Datagrid
                    optimized
                    rowClick="edit"
                    sx={{
                        '& .column-groups': {
                            md: { display: 'none' },
                            lg: { display: 'table-cell' },
                        },
                    }}
                >
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="active" />
                    <ReferenceField source="roomId" reference="rooms">
                        <TextField source="name"/>
                    </ReferenceField>
                </Datagrid>
            )}
        </List>
    );
};

export default DeviceList;
