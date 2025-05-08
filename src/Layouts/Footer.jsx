import React from "react";
import {Link}  from "react-router-dom"

function Footer () {
    return (
        <div className="footer">
            <div className='wrapper-footer'>
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Free Copyright
                </div>
                <div className="footer-contact">
                    <Link to="/contacts" className="footer-data-a">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;