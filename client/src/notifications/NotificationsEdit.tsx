import * as React from 'react';
import {
    Edit,
    NullableBooleanInput,
    TextInput,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRedirect,
    ReferenceField,
    TextField,
    Toolbar,
    SaveButton
} from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';
import { detectionTypes, notificationTypes } from "./notificationConfigValues"
const Spacer = () => <Box m={1}>&nbsp;</Box>;


const NotificationsSaveButton = (props: any) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const onSuccess = (response: any) => {
        notify(`Notification saved! Redirecting...`, {undoable: true});
        setTimeout(function () {
            redirect(`/devices/${response.deviceId}`);
        }, 2000);

    };
    return <SaveButton {...props} mutationOptions={{onSuccess}} type="button" />;
};
const NotificationsEditToolbar = (props:any) => (
    <Toolbar {...props} >
        <NotificationsSaveButton  />
    </Toolbar>
);

const NotificationsEdit = () => {

    return (
        <Edit title="Edit Notification" >
            <SimpleForm toolbar={<NotificationsEditToolbar />}>
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
                        <ReferenceField source="userId" reference="users" >
                            <TextField source="email" label="User Email" />
                        </ReferenceField >
                        <Spacer />
                        {/* <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
                                    <JsonInput source="config" multiline />
                                </Box> */}
                        <NullableBooleanInput sx={{ marginTop: "8px" }}
                            source="config.active"
                            label="Active"
                        />

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