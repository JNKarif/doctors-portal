import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
console.log(user)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
           
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-3xl my-3'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                       {

                        bookings?.map((booking,index)=> <tr
                        key={booking._id}
                        >
                        <th>{index+1}</th>
                        <td>{booking.client}</td>
                        <td>{booking.treatmentName}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>
                    </tr>)
                       }

                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;