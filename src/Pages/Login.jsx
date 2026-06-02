import { Link } from "react-router";

const Login = () => {

  
    return (
        <div>
            <div className="flex justify-center min-h-screen items-center ">


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center '>Login your account</h2>
                    <form className="card-body">
                        <fieldset className="fieldset">

                            {/* email  */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required/>

                            {/* pass  */}
                            <label className="label">Password</label>
                            <input name='pass' type="password" className="input" placeholder="Password" />
                        


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