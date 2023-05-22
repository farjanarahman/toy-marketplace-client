import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch(error => console.log(error));
  };

  const navItems = (
    <>
      <li className="font-semibold"><Link to="/">Home</Link></li>
      <li className="font-semibold"><Link to="/toys">All Toys</Link></li>
      <li className="font-semibold"><Link to="/mytoys">My Toys</Link></li>
      <li className="font-semibold"><Link to='/addToy'>Add A Toy</Link></li>
      <li className="font-semibold"><Link to='/blog'>Blogs</Link></li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        {/* Logo and Name */}
        <h3 className="text-orange-600 font-bold">RoboPlayground</h3>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user && <FaUserCircle style={{ fontSize: '2rem' }} />}
        {user ? (
          <>
            {/* <Link href="#deets" className="text-white">{user.displayName}</Link> */}
            <button onClick={handleLogout} className="btn btn-info">Logout</button>
          </>
        ) : (
          <Link to='/'>
            <button className="btn btn-info">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
