import React from "react";
import error_img from "../Images/error-img.png";
import {Link} from "react-router-dom";

function Contacts() {
    return (
        <div className="main">
            <div className='failed'>
                <p><h1>Hello from Contact page</h1></p>
                <p>Try refreshing the page. If that doesn't work, go back to the previous page</p>
                <h2><Link to="/" className="failed-link">Go back</Link></h2>
            </div>
        </div>
    )
}

export default Contacts;