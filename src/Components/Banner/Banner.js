import React,{useEffect, useState} from 'react'
import axios from '../../axios'

import {Api_Key,Image_Url} from '../../Constants/constants'

import "./Banner.css";
import instances from '../../axios';



function Banner() {
  const movieIndex=Math.floor(Math.random()*20);
  const[movie,setMovie]=useState();
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${Api_Key}&language=en-US`).then((response)=>
    {
      
      console.log(response.data.results[0]);
      setMovie(response.data.results[movieIndex]);
    })
    },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ?Image_Url+movie.backdrop_path: ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ""}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>

        </div>
        <h1 className='Description'>{movie ? movie.overview: ""}</h1>
      </div>

      <div className="fade_bottom"></div>




    </div>
  )
}


export default Banner