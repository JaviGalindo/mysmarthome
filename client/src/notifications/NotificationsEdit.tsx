import * as React from 'react';
import {
    Edit,
    NullableBooleanInput,
    TextInput,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    useNotify, useRedirect
} from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';
import { detectionTypes, notificationTypes } from "./notificationConfigValues"
const Spacer = () => <Box m={1}>&nbsp;</Box>;

const NotificationsEdit = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const onSuccess = (data:any) => {
        notify(`Changes saved`);
        redirect(`/devices/${data.deviceId}`);
    };
    return (
        <Edit title="Edit Notification"  mutationOptions={{onSuccess}}>
            <SimpleForm>
                <div>
                    <Typography variant="h6" gutterBottom>
                        Edit Notification
                    </Typography>
                    <Grid container >
                        <TextInput
                            source="subscriptionAuth"
                            label="Push notification subscription Id"
                            fullWidth
                        />
                        {/* <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <JsonInput source="config" multiline />
                                </Box> */}
                        <NullableBooleanInput sx={{marginTop:"8px"}}
                            source="config.active"
                            label="Active"
                        />
                        <Spacer />
                        <ReferenceInput source="userId" reference="users">
                            <SelectInput source="email" />
                        </ReferenceInput>
                        <Spacer />
                        <ReferenceInput source="deviceId" reference="devices">
                            <SelectInput source="name" />
                        </ReferenceInput>
                        <Spacer />
                        <SelectInput source='config.type' choices={notificationTypes} />
                        <Spacer />
                        <SelectInput source='config.detection' choices={detectionTypes} />
                        <Spacer />

                    </Grid>
                </div>
            </SimpleForm>
        </Edit>
    );
};

export default NotificationsEdit;