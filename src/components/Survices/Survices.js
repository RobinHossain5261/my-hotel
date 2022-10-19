import React from 'react';
import singleRoom from '../../images/single.jpg';
import coupleRoom from '../../images/copule.jpg';
import familyRoom from '../../images/family.jpg';
import girl from '../../images/women.jpg';
import expensive from '../../images/expensive.jpg';
import luxury from '../../images/luxury.jpg';
import { Link } from 'react-router-dom';

const Survices = () => {
    return (
        <div>
            <h3 className='text-6xl font-bold mt-12'>Our Survices</h3>
            <div className='w-3/4 mx-auto grid lg:grid-cols-3 gap-12 mt-12'>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={singleRoom} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Single-Room</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='/booking' className="btn btn-success btn-outline">Booking</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={coupleRoom} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Copule-Room</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">

                            <Link to='/booking' className="btn btn-success btn-outline">Booking</Link>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={familyRoom} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Family-Room</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='/booking' className="btn btn-success btn-outline">Booking</Link>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={girl} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dynamic-Room</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='/booking' className="btn btn-success btn-outline">Booking</Link>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={luxury} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Luxury-Room</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='/booking' className="btn btn-success btn-outline">Booking</Link>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-gray-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={expensive} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Expensive-Room</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='/booking' className="btn btn-success btn-outline">Booking</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Survices;