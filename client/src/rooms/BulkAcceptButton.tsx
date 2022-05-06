import * as React from 'react';
import ThumbUp from '@mui/icons-material/ThumbUp';

import {
    Button,
    useUpdateMany,
    useNotify,
    useUnselectAll,
    Identifier,
    useListContext,
} from 'react-admin';

const noSelection: Identifier[] = [];

const BulkAcceptButton = () => {
    const { selectedIds = noSelection } = useListContext();
    const notify = useNotify();
    const unselectAll = useUnselectAll('rooms');

    const [updateMany, { isLoading }] = useUpdateMany(
        'rooms',
        { ids: selectedIds, data: { status: 'accepted' } },
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
            label="resources.rooms.action.accept"
            onClick={() => updateMany()}
            disabled={isLoading}
        >
            <ThumbUp />
        </Button>
    );
};

export default BulkAcceptButton;
