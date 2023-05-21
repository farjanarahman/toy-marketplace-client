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
  }

  let navItems = (
    <>
      <li className="font-semibold"><Link to="/">Home</Link></li>
      <li className="font-semibold"><Link to="/toys">All Toys</Link></li>
      <li className="font-semibold"><Link to='/blog'>Blogs</Link></li>
      <li className="font-semibold"><Link to='/login'>Login</Link></li>
    </>
  );

  if (user) {
    navItems = (
      <>
        <li className="font-semibold"><Link to="/">Home</Link></li>
        <li className="font-semibold"><Link to="/toys">All Toys</Link></li>
        <li className="font-semibold"><Link to="/mytoys">My Toys</Link></li>
        <li className="font-semibold"><Link to='/addToy'>Add A Toy</Link></li>
        <li className="font-semibold"><Link to='/blog'>Blogs</Link></li>
      </>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar-start">
        {/* Dropdown */}
      </div>
      {/* Logo and Name */}
      {/* Navbar Center */}
      <div className="navbar-end">
        {user && <FaUserCircle style={{ fontSize: '2rem' }} />}
        {user ?
          <button onClick={handleLogout} className="btn btn-info">Logout</button>
          :
          <Link to='/login'>
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


