import React from 'react';
import './Home.css';
import Room from '../Room/Room';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-image">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome <span className='text-orange-300'>My-Hotel</span></h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/survices' className="btn btn-goast btn-outline">Get Started</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-6xl font-bold mt-12'>Our Survice</h3>
                <Room></Room>
            </div>
        </div>
    );
};

export default Home;