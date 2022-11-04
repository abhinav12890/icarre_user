import React, { useContext } from 'react'
// import {signOut} from "firebase/auth"
// import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import { Link } from "react-router-dom";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar2'>
      <span className="logo">iCare Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <Link to="/" style={{ textDecoration: "none" }}>
        <button >Dashboard</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar