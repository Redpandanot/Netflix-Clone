import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css";

const base_url="https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie , setMovie]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)])
            return request;
        }
        fetchData();
    },[])


    function truncate(str , n){
        return str?.length>n ? str.slice(0,n-1) + "..." : str;
    }
  return (
    <header className='banner'
            style={
                {
                    backgroundSize:'cover',
                    backgroundImage:`url(${base_url}${movie?.backdrop_path})`,
                    backgroundPosition:"center center"
                }
            }>
        <div className='banner_content'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
                <div className='banner_button'>
                    <button className='button_content'>Play</button>
                    <button className='button_content'>My List</button>
                </div>
            </h1>
            <h1 className='banner_description'>
                {truncate(movie?.overview, 150)}
            </h1>   
        </div>
        <div className='button_bottomFade'></div>
    </header>
  )
}

export default Banner;