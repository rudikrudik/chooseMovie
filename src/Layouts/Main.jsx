import React, {useState} from "react";
import {Context} from "../Components/MovieContext";
import Searching from "../Components/Searching";
import Movies from "../Components/Movies";
import {useLocation} from "react-router-dom";

function Main () {
    const location = useLocation()

    if (!location.state){
        location.state = {movie: ""}
    }

    const { movie } = location.state
    const [context, setContext] = useState(movie.searchString ? movie.searchString: "matrix");

    return (
        <Context.Provider value={[context, setContext]}>
            <div className="main">
                <div className="wrapper-movies">
                    <Searching/>
                    <Movies/>
                </div>
            </div>
        </Context.Provider>
    )
}

export default Main;