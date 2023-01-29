import React from 'react';

const TestimonialCard = ({ review }) => {
    const { image, name, location, meessage } = review

    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{meessage}</p>

                <div className='lg:flex items-center pt-3'>
                    <div className="avatar pr-4">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>

                    <div>
                        <div>{name} </div>

                        <div> {location}</div>


                    </div>

                </div>


            </div>
        </div>
    );
};

export default TestimonialCard;