import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ refetch, treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value
        const client = form.name.value
        const phone = form.phone.value
        const email = form.email.value

        console.log(slot, name, phone, email)

        const booking = {
            appointmentDate: date,
            treatmentName: name,
            client,
            slot,
            phone,
            email
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })

        // console.log(booking)

    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking}>

                        <div className='grid grid-cols-1 gap-3'>


                            <input type="text" value={date} disabled className="input input-bordered w-full" />
                            <select name='slot' className="select select-bordered w-full">
                                {
                                    slots.map((slot, index) => <option
                                        value={slot}
                                        key={index}
                                    >{slot}</option>
                                    )
                                }
                            </select>
                            <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                            <input type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full" />
                        </div>
                        <input type="submit" className='btn btn-accent w-full mt-2' name="" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;