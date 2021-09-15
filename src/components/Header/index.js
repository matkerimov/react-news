import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
                <a className="navbar-brand" href="#">Navbar</a>
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                {/*        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"*/}
                {/*        aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active" aria-current="page" href="#">Home Page</Link>
                        <Link to="/news" className="nav-link" href="#">News</Link>
                        <Link to="/" className="nav-link" href="#">Login</Link>
                        <Link to="/" className="nav-link" href="#">Sign up</Link>
                        {/*<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>*/}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;