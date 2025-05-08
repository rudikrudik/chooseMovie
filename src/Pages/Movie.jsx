import React, {useLayoutEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import Ratings from "../Components/Ratings";
import DefaultCardImage from "../Components/DefaultCardImage";

function Movie() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const location = useLocation()
    const { from } = location.state
    const { searchStr } =  location.state
    let searchString = searchStr.context

    let data = {
        title: from.data.Title,
        year:	from.data.Year,
        rated:	from.data.Rated,
        released:	from.data.Released,
        runtime:	from.data.Runtime,
        genre:	from.data.Genre,
        director:	from.data.Director,
        writer:	from.data.Writer,
        actors:	from.data.Actors,
        plot:	from.data.Plot,
        language:	from.data.Language,
        country:	from.data.Country,
        awards:	from.data.Awards,
        poster:	from.data.Poster,
        imdbVotes:	from.data.imdbVotes,
        imdbID:	from.data.imdbID,
        type:	from.data.Type,
        dvd:	from.data.DVD,
        boxOffice:	from.data.BoxOffice,
        production:	from.data.Production,
        website:	from.data.Website,
    }

    return (
        <div className="main">
            <div className="movie">
                <div className="wrapper-movie">
                    <div className="movie-img">
                        <DefaultCardImage data={data.poster}/>
                    </div>

                    <div className="movie-data-text">
                        <p><span>Title: </span>{data.title}</p>
                        <p><span>Year: </span>{data.year}</p>
                        <p><span>Rated: </span>{data.rated}</p>
                        <p><span>Released: </span>{data.released}</p>
                        <p><span>Runtime: </span>{data.runtime}</p>
                        <p><span>Genre: </span>{data.genre}</p>
                        <p><span>Director: </span>{data.director}</p>
                        <p><span>Writer: </span>{data.writer}</p>
                        <p><span>Actors: </span>{data.actors}</p>
                        <p><span>Language: </span>{data.language}</p>
                        <p><span>Country: </span>{data.country}</p>
                        <p><span>Awards: </span>{data.actors}</p>
                        <p><span>Type: </span>{data.type}</p>
                        <p><span>imdb Votes: </span>{data.imdbVotes}</p>
                        <div className="movie-ratings">
                            <Ratings data={from.data}/>
                        </div>
                    </div>

                </div>
                <div className="movie-data-more wrapper-movie">
                    <p>{data.plot}</p>
                    <p><span>DVD: </span>{data.dvd}</p>
                    <p><span>BoxOffice: </span>{data.boxOffice}</p>
                    <p><span>Production: </span>{data.production}</p>
                    <p><span>Website: </span>{data.website}</p>
                </div>
                <div className="movie-data-link">
                    <Link to="/" state={{movie: {searchString}}}>Back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default Movie;