import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light sticky-top">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="Beach Resort" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse px-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item px-2">
                                <Link class="nav-link text-dark fw-semibold" to="/">Home</Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link class="nav-link text-dark fw-semibold" to="/Rooms">Rooms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
