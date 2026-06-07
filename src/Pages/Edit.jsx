import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const Edit = () => {
    const { user, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateUser({
                displayName: name,
                photoURL: photo
            });

            navigate('/profile');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="flex justify-center py-50 items-center ">
            <div className="max-w-md mx-auto p-6  rounded-xl shadow border border-base-300">
                <h2 className="text-xl font-bold mb-4">Update Profile</h2>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        placeholder="Photo URL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full border p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};
;

export default Edit;