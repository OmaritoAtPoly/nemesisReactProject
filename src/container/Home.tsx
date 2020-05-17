import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Header from './Header';
import { CustomDatePicker } from '../basic/datePicker';


export const Home = () => {

    const [dateRange, setDateRange] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);

    const handleOnPickDate = (value: any) => {
        setDateRange(value)
    }

    return (
        <div>
            <Header />
            <CustomDatePicker onPickDate={handleOnPickDate} />
        </div>
    )
}