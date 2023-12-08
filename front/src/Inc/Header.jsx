import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/"><b>Company Managment</b></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header