import * as React from 'react';
import {
    Edit,
    NullableBooleanInput,
    TextInput,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    CreateButton
} from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';
import Notifications from './Notifications';

import Aside from './Aside';
const Spacer = () => <Box m={1}>&nbsp;</Box>;

const DeviceEdit = () => {
    return (
        <Edit title="Edit Device" aside={<Aside />} >
            <SimpleForm>
                <div>
                    <Typography variant="h6" gutterBottom>
                        Edit Device
                    </Typography>
                    <Grid container >


                        <TextInput
                            source="name"
                            isRequired
                            fullWidth
                        />
                        {/* <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <JsonInput source="config" multiline />
                                </Box> */}
                        <ReferenceInput source="roomId" reference="rooms">
                            <SelectInput source="name" fullWidth defaultValue={null} />
                        </ReferenceInput>
                        <NullableBooleanInput
                            fullWidth
                            format={value => value === 1 ? true : false}
                            source="active"
                        />
                        {/* <CreateButton LinkComponent={NotificationsCreate} resource="notifications" label="Create new notification config"/> */}
                    </Grid>
                </div>
                <div>
                    <Notifications />
                </div>
            </SimpleForm>
        </Edit>
    );
};



export default DeviceEdit;
