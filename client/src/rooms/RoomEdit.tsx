import * as React from 'react';
import {
    EditBase,
    useTranslate,
    TextInput,
    SimpleForm,
    EditProps,
    Labeled,
} from 'react-admin';
import { Box, Grid, Stack, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Room } from '../types';

interface Props extends EditProps<Room> {
    onCancel: () => void;
}

const RoomsEdit = ({ onCancel, ...props }: Props) => {
    const translate = useTranslate();
    return (
        <EditBase {...props}>
            <Box pt={5} width={{ xs: '100vW', sm: 400 }} mt={{ xs: 2, sm: 1 }}>
                <Stack direction="row" p={2}>
                    <Typography variant="h6" flex="1">
                        {translate('resources.rooms.detail')}
                    </Typography>
                    <IconButton onClick={onCancel} size="small">
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <SimpleForm
                    sx={{ pt: 0, pb: 0 }}
                >
                    <Grid container rowSpacing={1} mb={1}>
                        <Grid item xs={6}>
                            <Labeled>
                                <TextInput source="name" />
                            </Labeled>
                        </Grid>
                    </Grid>

                </SimpleForm>
            </Box>
        </EditBase>
    );
};

export default RoomsEdit;
