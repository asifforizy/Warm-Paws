import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const [error, setError] = useState("")

    const { signIn } = useContext(AuthContext);
    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;

                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch((error) => {

                setError("Invalid email or password!");
                toast.error("Invalid email or password!");
            });
    };
    return (
        <div>
            <div className="flex justify-center min-h-screen items-center ">


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center '>Login you account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">

                            {/* email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />

                            {/* pass  */}
                            <label className="label">Password</label>
                            <input name='pass' type="password" className="input" placeholder="Password" />
                            {error && <p className='text-red-500 text-sm'>{error}</p>}


                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral my-2">Login</button>
                            <p>Don't have An Account ? <Link to="/signup" className='text-blue-600 hover:underline font-semibold'>Register</Link></p>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;