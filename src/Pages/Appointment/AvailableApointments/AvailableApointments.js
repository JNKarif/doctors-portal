import React, { useState } from 'react';
import { format } from 'date-fns';
import AvailableOption from '../AvailableOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/loading/Loading';
const AvailableApointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions]=useState([]);
    const [treatment, setTreatment] = useState(null)
const date= format(selectedDate, 'PP')
    const { data: appointmentOptions = [], refetch , isLoading } = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })


    if(isLoading){
        return <Loading></Loading>
    }
    // ****useEffect no need if we use useQuery***
    // useEffect(()=>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data=> setAppointmentOptions(data))

    // },[])

    return (
        <div className='text-center my-20'>
            <p className='text-secondary text-xl font-bold mb-10'>Available Appointment on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    appointmentOptions.map(option => <AvailableOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AvailableOption>)
                }
                {
                    treatment && <BookingModal
                        treatment
                        ={treatment}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableApointments;