import React from 'react';
import image from '../../../assets/images/chair.png'
import PrimaryButtons from '../../../components/PrimaryButtons';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
          background: `url(${bg})`,
          backgroundSize: 'cover'
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <PrimaryButtons>Get Started</PrimaryButtons>
          </div>
        </div>
      </div>
    );
};

export default Banner;