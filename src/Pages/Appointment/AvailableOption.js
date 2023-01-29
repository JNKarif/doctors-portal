import React from 'react';


const AvailableOption = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div className="card  bg-base-100  shadow-xl">
            <div className="card-body ">
                <h2 className="justify-center text-secondary text-2xl font-bolds">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className=" " >

                    <label
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal" disabled={slots.length === 0} className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary ">Book for now</label>

                </div>
            </div>
        </div>
    );
};

export default AvailableOption;