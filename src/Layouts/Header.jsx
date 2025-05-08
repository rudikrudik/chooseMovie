import React from "react";
import {Link} from "react-router-dom"

function Header () {
    return (
        <div className="header">
            <div className='wrapper-header'>
                <Link to="/" className="header-logo">Choose Movie!</Link>
                <div className="header-data">
                    <Link to="/contacts" className="header-data-a">Repo</Link>
                    <Link to="/contacts" className="header-data-a">Data</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;