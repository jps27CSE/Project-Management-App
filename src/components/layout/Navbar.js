import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignOutLinks from './SignOutLinks'
const Navbar = () => {
    return (
        <nav className="nav-wrapper #6a1b9a purple darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project Management</Link>
                <SignedInLinks />
                <SignOutLinks />
            </div>
        </nav>
    )
}

export default Navbar