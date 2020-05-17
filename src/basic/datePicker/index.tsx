import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { DatePickerDialog } from './DatePickerDialog'

interface Props {
    onPickDate: (value: any) => void
}

export const CustomDatePicker = ({ onPickDate }: Props) => {
    const [open, setOpen] = useState(false)

    const handleOnClick = () => {
        setOpen(true)
    }

    const onClose = (value: any) => {
        onPickDate(value)
        setOpen(false)
    }

    return (
        <div>
            <DatePickerDialog open={open} onClose={onClose} />
            <Button variant='outlined' onClick={handleOnClick} >Open Date Range Picker</Button>
        </div>
    )
}