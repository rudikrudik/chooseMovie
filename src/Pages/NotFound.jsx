import React from "react";
import {Link} from "react-router-dom";
import shrek404 from "../Images/shrek404.png"

function NotFound() {
    return (
        <div className="main">
            <div className='page-404'>
                <p><h1>Hello from 404 page</h1></p>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <p><img src={shrek404} alt="image"></img></p>
                <h2><Link to="/" className="failed-link">Back to home</Link></h2>
            </div>
        </div>
    )
}

export default NotFound;