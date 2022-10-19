import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-gray-100">

            <div className="navbar-start lg:pl-20">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/survices'>Survices</Link></li>
                        {
                            user?.uid ?
                                <button onClick={logOut} className="btn btn-active btn-ghost">Log Out</button>
                                : <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </>
                        }

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">My-Hotel</Link>
                <Link className='hidden lg:flex'>{user?.email}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/survices'>Survices</Link></li>

                    {
                        user?.uid ?
                            <button onClick={logOut} className="btn btn-active btn-ghost">Log Out</button>
                            : <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                    }


                </ul>
            </div>
            <div className="navbar-end pr-20 ">
                <Link to='/booking' className="btn btn-success">Booking</Link>
            </div>

        </div>
    );
};

export default Header;