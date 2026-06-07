
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
    <div className="navbar  shadow-md px-4 lg:px-10">

      <div className="navbar-start gap-2 items-center">
        <Link to="/"> <FaPaw className="text-xl " /></Link>
        <Link to="/" className="text-xl font-bold ">WarmPaws</Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-base font-medium">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/services" >Services</NavLink>
          </li>
          <li>
            <NavLink to="/about" >About Us</NavLink>
          </li>

          <li>
            <NavLink to="/profile" > My Profile </NavLink>
          </li>

        </ul>
      </div>

      <div className="navbar-end gap-3">
        {
          user ? <button onClick={handleLogOut} className="btn btn-outline btn-sm">Logout</button> : <Link to="/login" ><button className="btn btn-outline btn-sm">Login</button></Link>
        }

        {
          user ? <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" /> : <MdAccountCircle className="  text-4xl" />
        }



      </div>
    </div>
  );
};

export default Navbar;