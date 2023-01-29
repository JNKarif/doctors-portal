import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableApointments from './AvailableApointments/AvailableApointments';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
           <AppointmentBanner
           selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}
           ></AppointmentBanner>

           <AvailableApointments
           selectedDate={selectedDate}
           ></AvailableApointments>
        </div>
    );
};

export default Appointment;