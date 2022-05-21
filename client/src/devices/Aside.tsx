import * as React from 'react';
import {
    TextField,
    useGetManyReference,
    RecordContextProvider,
    useRecordContext,
} from 'react-admin';
import {
    Typography,
    Card,
    CardContent,
    Box,
    Stepper,
    Step,
    StepLabel,
    StepContent,
} from '@mui/material';
import NotificationImportant from '@mui/icons-material/NotificationImportant';

import {
    Device
} from '../types';

const Aside = () => {
    const record = useRecordContext<Device>();
    return (
        <Box width={400} display={{ xs: 'none', lg: 'block' }}>
            {record && <EventList />}
        </Box>
    );
};

const EventList = () => {
    const record = useRecordContext<Device>();

    const { isLoading, data: userNotifications } = useGetManyReference<any>(
        'userNotifications',
        { 
            target: 'deviceId',
            id: record.id,
        },
    );

    return (
        <Box ml={2}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    {record.name} notifications Timeline ({userNotifications?.length})
                    </Typography>
                </CardContent>
            </Card>

            <Stepper orientation="vertical" sx={{ mt: 1 }}>
                {userNotifications?.sort((a, b) => parseInt(b.id) - parseFloat(a.id)).map(userNotification => (
                    <Step
                        key={`${userNotification.id}`}
                        expanded
                        active
                        completed
                    >
                        <StepLabel
                            icon={
                                    <NotificationImportant
                                        color="disabled"
                                        sx={{ pl: 0.5, fontSize: '1.25rem' }}
                                    />
                            }
                        >
                            {userNotification.title}
                        </StepLabel>
                        <StepContent>
                            <RecordContextProvider value={userNotification}>
                                    <Order />
                            </RecordContextProvider>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

const Order = () => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <>
            <Typography variant="body2" gutterBottom>
            Channel: {record.type}&nbsp;-&nbsp;{record.date}
            </Typography>
            <Typography variant="body2" color="textSecondary">

                &nbsp;-&nbsp;
                <div>
                    <img src={`${process.env.REACT_APP_SUBSCRIPTION_URL}/${record.picture}`} alt={record.title} width="150" height="150"/>
                </div>

                &nbsp;-&nbsp;
                <TextField source="status" />
            </Typography>
        </>
    );
};


export default Aside;
