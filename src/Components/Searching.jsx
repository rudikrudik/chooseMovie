import React, {useContext, useState} from "react";
import {Context} from "./MovieContext";

function Searching () {
    // eslint-disable-next-line no-unused-vars
    const [context, setContext] = useContext(Context);
    const [searchMovie, setSearchMovie] = useState("")

    return (
        <div className="search-block">
            <input className="input-field" size="80%"
                   placeholder="Searching" type="search" id="search" value={searchMovie}
                   onChange={e => setSearchMovie(e.target.value)}/>
            <button className="input-button" onClick={() => setContext(searchMovie)}>Search</button>
        </div>
    )
}

export default Searching;