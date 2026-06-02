
import { Link, Links, NavLink } from "react-router";
import { MdAccountCircle } from "react-icons/md";
import { FaPaw } from "react-icons/fa";


const Navbar = () => {
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
            <NavLink to="/profile" > My Profile </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <Link to="/login" ><button className="btn btn-outline btn-sm">Login</button></Link>
        <MdAccountCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;