import React from 'react';
import Service from './Service';
import cavity from '../../../../assets/images/cavity.png'
import fluoride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'

const Services = () => {

    const serviceInfo = [
        {
            id: 1,
            image: fluoride,
            name: 'Fluoride Treatment',

        },
        {
            id: 2,
            image: cavity,
            name: 'Cavity Filling',

        },
        {
            id: 3,
            image: whitening,
            name: 'Teeth Whitening',

        }
    ]

    return (
        <div>
            <div className='text-center mt-20'>
                <p className='text-2xl text-secondary'>Our Services</p>
                <p className='text-4xl'>Services We Provide</p>
            </div>

            <div className='grid mt-12 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>



                {


                    serviceInfo.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;