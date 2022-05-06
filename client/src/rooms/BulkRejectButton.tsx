import * as React from 'react';
import ThumbDown from '@mui/icons-material/ThumbDown';

import {
    Button,
    useUpdateMany,
    useNotify,
    useUnselectAll,
    Identifier,
    useListContext,
} from 'react-admin';

const noSelection: Identifier[] = [];

const BulkRejectButton = () => {
    const { selectedIds = noSelection } = useListContext();
    const notify = useNotify();
    const unselectAll = useUnselectAll('rooms');

    const [updateMany, { isLoading }] = useUpdateMany(
        'rooms',
        { ids: selectedIds, data: { status: 'rejected' } },
        {
            mutationMode: 'undoable',
            onSuccess: () => {
                notify('resources.rooms.notification.approved_success', {
                    type: 'info',
                    undoable: true,
                });
                unselectAll();
            },
            onError: () => {
                notify('resources.rooms.notification.approved_error', {
                    type: 'warning',
                });
            },
        }
    );

    return (
        <Button
            label="resources.rooms.action.reject"
            onClick={() => updateMany()}
            disabled={isLoading}
        >
            <ThumbDown />
        </Button>
    );
};

export default BulkRejectButton;
