import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButtons from '../../../components/PrimaryButtons';

const DentalCare = () => {
    return (
        <div className="hero my-20 ">
  <div  className="hero-content lg:px-36 flex-col lg:flex-row">
    <img  alt='' src={treatment} className="max-w-[320px] rounded-lg shadow-2xl" />
    <div className='lg:ml-[40px]'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, <br/> on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pages</p>
      <PrimaryButtons>Getting Started</PrimaryButtons>
    </div>
  </div>
</div>
    );
};

export default DentalCare;