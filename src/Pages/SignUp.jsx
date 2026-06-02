import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div>

            <div>
                <div className="flex justify-center min-h-screen items-center ">


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className='font-semibold text-2xl text-center '>Register you account</h2>

                        <form className="card-body">
                            <fieldset className="fieldset">

                                {/* Name */}
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Your Name" required />

                                {/* email  */}
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" required />

                                {/* Photo URL  */}
                                <label className="label">Photo URL</label>
                                <input name='url' type="text" className="input" placeholder="Photo URL" required />



                                {/* pass  */}
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" required />


                                <button type='submit' className="btn btn-neutral my-2">Register</button>

                                <p>Already have An Account ? <Link to="/login" className='text-blue-600 hover:underline font-semibold'>Login</Link></p>
                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;