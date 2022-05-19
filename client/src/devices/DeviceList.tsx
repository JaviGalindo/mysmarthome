import * as React from 'react';
import {
    BooleanField,
    CreateButton,
    Datagrid,
    List,
    ReferenceField,
    TextField,
} from 'react-admin';


const DeviceList = () => {
    return (
        <List
            sort={{ field: 'id', order: 'DESC' }}
            actions={<CreateButton/ >}
            perPage={25}
        >

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
                    <BooleanField source="active" looseValue  />
                    <ReferenceField source="roomId" reference="rooms">
                        <TextField source="name"/>
                    </ReferenceField>
                </Datagrid>
        </List>
    );
};

export default DeviceList;
