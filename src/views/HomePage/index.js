import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (

        <div className="hero text-center d-flex justify-content-center align-items-center" >
            <div style={{marginTop: "100px"}}>
                <Link className="home-page-btn" style={{color: "white",
                    border: "1px solid white",
                    padding: "10px 50px",
                    transition: ".6s"}}
                to="/news" >Welcome</Link>

            </div>
        </div>
    );
};

export default HomePage;