import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

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

                        <h2 className="text-3xl font-bold mt-6">{user.displayName}</h2>
                        <p className="text-base-content/70 mt-2">{user.email}</p>
                    </div>

                    <div className="lg:col-span-2 p-8">
                        <h3 className="text-2xl font-bold mb-8">Update Profile Information</h3>

                        <div className="grid gap-6">
                            <div className="bg-base-200 rounded-2xl p-5">
                                <p className="text-sm text-base-content/60 mb-1">Name</p>
                                <p className="font-semibold text-lg">{user.name}</p>
                            </div>

                            <div className="bg-base-200 rounded-2xl p-5">
                                <p className="text-sm text-base-content/60 mb-1">Email</p>
                                <p className="font-semibold text-lg">{user.email}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="btn btn-primary">
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;