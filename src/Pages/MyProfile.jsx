import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import "animate.css";

const MyProfile = () => {
    const { user } = use(AuthContext);
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-5xl mx-auto rounded-3xl border border-base-300 bg-base-100 shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-3">
                    <div className="border-b lg:border-b-0 lg:border-r border-base-300 p-8 flex flex-col items-center justify-center">
                        <div className="avatar">
                            <div className="w-40 rounded-full ring ring-base-300 ring-offset-2 ring-offset-base-100">
                                <img src={user.photoURL} alt={user.name} />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-6 animate__animated animate__bounce">{user.displayName}</h2>
                        <p className="text-base-content/70 mt-2">{user.email}</p>
                    </div>

                    <div className="lg:col-span-2 p-8">
                       <div>
                            <h1 className="text-3xl font-bold mb-4 ">My Profile</h1>
                            <p className="text-lg font-semibold">Name: {user.displayName}</p>
                            <p className="text-lg font-semibold">Email: {user.email}</p>
                            <Link to="/editProfile">
                                <button className="btn btn-primary mt-4">Edit Profile</button>
                            </Link>
                        </div>
                       
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;