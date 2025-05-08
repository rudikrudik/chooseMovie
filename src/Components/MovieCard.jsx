import React, {useContext} from "react";
import {Link} from "react-router-dom"
import Ratings from "./Ratings";
import useSWR from "swr";
import fetcher from "./FetcherData";
import {Context} from "./MovieContext";
import DefaultCardImage from "./DefaultCardImage";

function MovieCard(props) {
    const linkMovie = `/movie/${props.data.imdbID}`
    const [context, setContext] = useContext(Context);

    const {
        data,
        error,
        isLoading
    } = useSWR(`${global.config.urls.baseUrl}?&i=${props.data.imdbID}&plot=full&apikey=${global.config.apiKey.key}`, fetcher);

    if (error) return <p>Error Loading data</p>
    if (isLoading) return <p>Error Loading data</p>

    return (
        <div className="wrapper-card">
            <div className="card">
                <Link to={linkMovie} state={{ from: {data}, searchStr: {context} }}><DefaultCardImage data={props.data.Poster}/></Link>
                <div className="card-content">
                    <a href={props.data.id}><b>{props.data.Title}</b></a>
                    <div className="card-content-wrapper">
                        <p className="card-content-left">{props.data.Year}</p>
                        <p className="card-content-right">{props.data.Type}</p>
                    </div>
                    <div className="image-content-wrapper">
                        <Ratings data={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;