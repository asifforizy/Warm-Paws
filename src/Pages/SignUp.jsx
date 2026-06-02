import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

    const [nameError, setNameError] = useState("")
    const { createUser, setUser, updateUser } = use(AuthContext);

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

                            {/* pass  */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required />


                            <button type='submit' className="btn btn-neutral my-2">Register</button>

                            <p>Already have An Account ? <Link to="/auth/login" className='text-blue-600 hover:underline font-semibold'>Login</Link></p>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;