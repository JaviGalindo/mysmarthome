import * as React from 'react';
import {
    Create,
    DateInput,
    SimpleForm,
    TextInput,
    useTranslate,
    PasswordInput,
    email,
} from 'react-admin';
import { Box, Typography } from '@mui/material';

export const validateForm = (
    values: Record<string, any>
): Record<string, any> => {
    const errors = {} as any;
    if (!values.name) {
        errors.name = 'Name is required';
    }
    return errors;
};

const RoomCreate = () => (
    <Create>
        <SimpleForm
            sx={{ maxWidth: 500 }}
            validate={validateForm}
        >
            <SectionTitle label="Device" />
            <TextInput source="name" isRequired fullWidth />
        </SimpleForm>
    </Create>
);

const SectionTitle = ({ label }: { label: string }) => {

    return (
        <Typography variant="h6" gutterBottom>
            {label}
        </Typography>
    );
};

const Separator = () => <Box pt="1em" />;

export default RoomCreate;
