import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Renting System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/equipments'}>Equipments</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Customers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar