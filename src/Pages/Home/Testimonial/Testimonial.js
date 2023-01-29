import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import peop1e1 from '../../../assets/images/people1.png'
import peop1e2 from '../../../assets/images/people2.png'
import peop1e3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';



const Testimonial = () => {

const reviews= [
    {
        id: 1,
        name: 'Winson Herry' ,
        location: 'California',
        image:peop1e1,
        meessage: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        id: 1,
        name: 'Winson Herry' ,
        location: 'California',
        image:peop1e2,
        meessage: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    },
    {
        id: 3,
        name: 'Winson Herry' ,
        location: 'California',
        image:peop1e3,
        meessage: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
    }
]

    return (
        <section className='my-20'>
            <div className='flex justify-between items-center px-14'>
                <div>
                    <p className='text-lg font-bold text-primary'>Testimonial</p>
                    <p className='text-3xl'>What Our Patients say 
                    </p>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt=""/>

                </figure>
            </div>
            <div>
               
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 '>
{

reviews.map(review=><TestimonialCard
key={review.id}
review={review}
></TestimonialCard>)
}    
</div>


            </div>
        </section>
    );
};

export default Testimonial;