import React, {useEffect, useState} from 'react';
import axios from './axios';
import './Row.css';
// import YouTube  from 'react-youtube';
// import movieTrailer from 'movie-trailer';

//img url
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl, isLargeRow}){
    const [movies, setMovies]= useState([]);
    // const [trailerUrl, setTrailerUrl]= useState("");

    // a snippet of code which runs based on a specific condition
    useEffect(()=>{
        // is [] is blank it will run once thr row loads and dont run again or we can fill the
        //[] with a dependency making the useEffect run every time the dependency value changes.
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }fetchData();
    },[fetchUrl]);

//Trying to play trailer
    // const handleClick=(movie)=>{
    //     if(trailerUrl){
    //         setTrailerUrl('');
    //     }else{
    //         movieTrailer(movie?.name || '')
    //         .then((url)=>{
    //             const urlParams=new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get("v"));
    //         }).catch((error)=>console.log(error))
    //     }
    // }

    // const opts={
    //     height:"390",
    //     width:"100%",
    //     playerVars:{
    //         autoplay:1,
    //     },
    // }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map( movie => (
                    <img 
                         key={movie.id}
                        //  onClick={() => handleClick(movies)}
                         className={`row_poster ${isLargeRow ?'row_posterLarge': ''}`}
                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                         alt={movie.name}/>
                ))}
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opt={opts}/>} */}
        </div>
    );
}

export default Row;