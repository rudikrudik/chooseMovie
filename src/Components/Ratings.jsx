import React from "react";
import rtImage from "../Images/rt.png";
import imdbImage from "../Images/imdb.png";
import mcImage from "../Images/mc.png";

function Ratings (props) {
    let rt, imdb, mc

    for (let i = 0; i < props.data.Ratings.length; i++) {
        if (props.data.Ratings[i].Source === "Internet Movie Database") {
            imdb = props.data.Ratings[i].Value
        }
        if (props.data.Ratings[i].Source === "Rotten Tomatoes") {
            rt = props.data.Ratings[i].Value
        }
        if (props.data.Ratings[i].Source === "Metacritic") {
            mc = props.data.Ratings[i].Value
        }
    }

    return (
        <>
            <p>{rt ? <img src={rtImage}></img> : ""}</p>
            <p>{rt ? rt : " "}</p>
            <p>{imdb ? <img src={imdbImage}></img> : ""}</p>
            <p>{imdb ? imdb : " "}</p>
            <p>{mc ? <img src={mcImage}></img> : ""}</p>
            <p>{mc ? mc : " "}</p>
        </>
    )
}

export default Ratings;