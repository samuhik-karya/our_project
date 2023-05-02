import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Beach Resort" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <Link className="nav-link text-dark fw-semibold" to="/">Home</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link text-dark fw-semibold" to="/Rooms">Rooms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
