import * as React from 'react';
import {
    EditBase,
    TextInput,
    SimpleForm,
    EditProps,
    Labeled,
    SaveButton,
    Toolbar
} from 'react-admin';
import { Box, Grid, Stack, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { User } from '../types';

interface Props extends EditProps<User> {
    onCancel: () => void;
}
const PostEditToolbar = (props: any) => (
    <Toolbar {...props} >
        <SaveButton />
    </Toolbar>
);

const UserEdit = ({ onCancel, ...props }: Props) => {
    return (
        <EditBase {...props}>
            <Box pt={5} width={{ xs: '100vW', sm: 400 }} mt={{ xs: 2, sm: 1 }}>
                <Stack direction="row" p={2}>
                    <Typography variant="h6" flex="1">
                        Edit User
                    </Typography>
                </Stack>
                <SimpleForm toolbar={<PostEditToolbar />}
                    sx={{ pt: 0, pb: 0 }}

                >
                    <Grid container rowSpacing={1} mb={1}>
                        <Grid item xs={6}>
                            <TextInput disabled source="id" />
                            <TextInput disabled source="username" />
                            <TextInput source="email" />
                        </Grid>
                    </Grid>

                </SimpleForm>
            </Box>
        </EditBase>
    );
};

export default UserEdit;
