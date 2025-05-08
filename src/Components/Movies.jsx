import React, {useContext, useLayoutEffect} from "react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import fetcher from "./FetcherData";
import error_img from "../Images/error-img.png";
import {Link} from "react-router-dom";
import {Context} from "./MovieContext";
import "../config"

function Movies () {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const [context, setContext] = useContext(Context);

    const {
        data,
        error,
        isLoading
    } = useSWR(`${global.config.urls.baseUrl}?&s=${context}&apikey=${global.config.apiKey.key}`, fetcher);

    // Handles error and loading state
    if (error) return (
        <div className='failed'>
            <img src={error_img} alt="Something went wrong"></img>
            <p><h1>Something went wrong</h1></p>
            <p>Try refreshing the page. If that doesn't work, go back to the previous page</p>
            <h2><Link to="/" className="failed-link" >Go back</Link></h2>
        </div>
    );

    if (isLoading) return (
        <div className="failed">
            <div className="wrapper-loader">
                <p className="loader">Load&nbsp;ng</p>
            </div>
        </div>
    );

    if (data.Response === "False") return <h1>not found</h1>

    return (
        <div className="movies">
            {data.Search.map((element) => {
                return <MovieCard key={element.imdbID} data={element}/>
            })}
        </div>
    )
}

export default Movies;