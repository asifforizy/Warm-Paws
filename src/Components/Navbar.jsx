import React from 'react';
import { Link, Links, NavLink } from "react-router";
import { MdAccountCircle } from "react-icons/md";
import { FaPaw } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";


const Navbar = () => {
    const { user, LogOut } = use(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {

      }).catch((error) => {
        console.log(error)
      });
  }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-2 lg:px-25">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" >About Us</NavLink>
                            </li>

                            <li>
                                <NavLink to="/services" >Services</NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile" > My Profile </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="navbar-start gap-2 items-center">
                        <Link to="/"> <FaPaw className="text-xl " /></Link>
                        <Link to="/" className="text-xl font-bold ">WarmPaws</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >About Us</NavLink>
                        </li>

                        <li>
                            <NavLink to="/services" >Services</NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile" > My Profile </NavLink>
                        </li>


                    </ul>
                </div>
                <div className="navbar-end gap-3 items-center">
                    {
                        user ? <button onClick={handleLogOut} className="btn btn-outline btn-sm">Logout</button> : <Link to="/login" ><button className="btn btn-outline btn-sm">Login</button></Link>
                    }

                    {
                        user ? <Link to="/profile"> <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" /> </Link> : <MdAccountCircle className="  text-4xl" />
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;