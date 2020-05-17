import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

export interface Props {
    open: boolean;
    onClose: (value: any) => void;
}

export const DatePickerDialog = ({ onClose, open }: Props) => {

    const [state, setState] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);

    const handleOnClick = () => {
        onClose(state)
    }

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialsog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Date Filter</DialogTitle>
            <DateRange
                onChange={(item: any) => setState([item.selection])}
                ranges={state}
            />
            <DialogActions>
                <Button variant='outlined' onClick={handleOnClick} color="primary" >
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    )
}