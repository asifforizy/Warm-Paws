import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const SignUp = () => {

    const [nameError, setNameError] = useState("")
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();



    const handleSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if (name.length < 4) {
            setNameError("Name must be at least 3 characters long");
            return;
        }
        else {
            setNameError("");
        }

        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        createUser(email, password)
            .then(res => {
                const user = res.user;
                updateUser({ displayName: name, photoURL: url })
                    .then(() => {

                        setUser({ ...user, displayName: name, photoURL: url })
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }


    return (

        <div>
            <div className="flex justify-center min-h-screen items-center ">


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center '>Register you account</h2>

                    <form onSubmit={handleSignUp} className="card-body">
                        <fieldset className="fieldset">

                            {/* Name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Name" required />
                            {nameError && <p className='text-red-500 text-sm'>{nameError}</p>}

                            {/* Photo URL  */}
                            <label className="label">Photo URL</label>
                            <input name='url' type="text" className="input" placeholder="Photo URL" required />

                            {/* email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />

                            {/* Password */}
                            <label className="label">Password</label>
                            <div className="relative">
                                <input
                                    name='password'
                                    type={showPassword ? "text" : "password"}
                                    className="input w-full pr-10"
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (<FaRegEyeSlash className="text-xl" />) : (<FaRegEye className="text-xl" />)}
                                </button>
                            </div>


                            <button type='submit' className="btn btn-neutral my-2">Register</button>

                            <p>Already have An Account ? <Link to="/login" className='text-blue-600 hover:underline font-semibold'>Login</Link></p>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;