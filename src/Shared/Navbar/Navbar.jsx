import { Link } from "react-router-dom"
import logo from '../../assets/Logo.svg'
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
    const navItems = <>
        <li className="font-semibold"><Link to="/">Home</Link></li>
        <li className="font-semibold"><Link>All Toys</Link></li>
        <li className="font-semibold"><Link>My Toys</Link></li>
        <li className="font-semibold"><Link>Add A Toy</Link></li>
        <li className="font-semibold"><Link>Blogs</Link></li>
    </>

    const { user } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* Logo and Name */}
                <h3 className="text-orange-600	 font-bold">RoboPlayground </h3>
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
                {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                <Link href="#deets" className="text-white">{user.displayName}</Link>
                {user ?
                    <button className="btn btn-info">Logout</button> :
                    <Link to='/'>
                        <button className="btn btn-info">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;


// import React, { useContext } from "react";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";
// import { NavLink } from "react-router-dom";
// import './Navbar.css'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const NavigationBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const handleLogOut = () => [
//     logOut()
//       .then()
//       .catch(error => console.log(error))
//   ]
//   return (
//     <div>
//       <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-dark">
//         {/* <Container> */}
//           <Navbar.Brand href="#home" className="text-danger">Chef's Delight</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <NavLink
//                 exact
//                 to="/"
//                 className="nav-link"
//                 activeClassName="active"
//                 style={{ color: 'white' }
//                 }
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/blog"
//                 className="nav-link"
//                 activeClassName="active"
//                 style={{ color: 'white' }}
//               >
//                 Blog
//               </NavLink>
//             </Nav>
//             <Nav>
//               <Nav.Link>
//                 <FontAwesomeIcon icon="user" style={{ color: 'white' }} />
//               </Nav.Link>
//               <Nav.Link href="#deets" className="text-white">User</Nav.Link>
//               <Nav.Link>
//                 <i style={{ color: 'wheat' }} class="fa-solid fa-user"></i>
//               </Nav.Link>
//               <Nav.Link eventKey={2} href="#memes">
//                 {user ?
//                   <Button onClick={handleLogOut} variant="secondary" className="btn btn-danger">Logout</Button> :
//                   <Link to="/login">
//                     {/* <Button variant="secondary" className="btn btn-warning">Login</Button> */}
//                   </Link>
//                 }

//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         {/* </Container> */}
//       </Navbar>
//     </div>
//   );
// };

// export default NavigationBar;


