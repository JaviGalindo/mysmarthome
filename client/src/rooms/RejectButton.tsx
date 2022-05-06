import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ThumbDown from '@mui/icons-material/ThumbDown';
import {
    useTranslate,
    useUpdate,
    useNotify,
    useRedirect,
    useRecordContext,
} from 'react-admin';
import { Room } from '../types';

/**
 * This custom button demonstrate using a custom action to update data
 */
const RejectButton = () => {
    const translate = useTranslate();
    const notify = useNotify();
    const redirectTo = useRedirect();
    const record = useRecordContext<Room>();

    const [reject, { isLoading }] = useUpdate(
        'rooms',
        { id: record.id, data: { status: 'rejected' }, previousData: record },
        {
            mutationMode: 'undoable',
            onSuccess: () => {
                notify('resources.rooms.notification.rejected_success', {
                    type: 'info',
                    undoable: true,
                });
                redirectTo('/rooms');
            },
            onError: () => {
                notify('resources.rooms.notification.rejected_error', {
                    type: 'warning',
                });
            },
        }
    );

    return record && record.status === 'pending' ? (
        <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => reject()}
            startIcon={<ThumbDown sx={{ color: 'red' }} />}
            disabled={isLoading}
        >
            {translate('resources.rooms.action.reject')}
        </Button>
    ) : (
        <span />
    );
};

RejectButton.propTypes = {
    record: PropTypes.any,
};

export default RejectButton;
