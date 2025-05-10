import React, {useContext, useState} from "react";
import {Context} from "./MovieContext";

function Searching () {
    const {setContext} = useContext(Context);
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