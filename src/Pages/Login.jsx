import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';




const Login = () => {

    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { signIn, signInWithGoogle } = useContext(AuthContext);
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
            });
    };



    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location.state ? location.state : "/");
            })
            .catch(() => {
                setError("Google sign-in failed. Try again.");
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

                            {/* Password */}
                            <label className="label">Password</label>
                            <div className="relative">
                                <input
                                    name='pass'
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


                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral my-2">Login</button>

                            <div className="divider">
                                <hr /> or <hr />
                            </div>

                            <button onClick={handleGoogleLogin} className="btn mb-3 bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            <p>Don't have An Account ? <Link to="/signup" className='text-blue-600 hover:underline  font-semibold'>Signup</Link></p>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;