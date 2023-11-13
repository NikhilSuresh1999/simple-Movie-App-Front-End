import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {Image_Url,Api_Key} from '../../Constants/constants'
import './RowPost.css';
function RowPost(props) {

    const [movies,setMovies]=useState([]);
    const [urlId,setUrlId]=useState('');
    
    useEffect(()=>
    {
      axios.get(props.url).then(response=>{
        //console.log(response.data)
        setMovies(response.data.results);
      }).catch(error=>
        {
          alert("Network Error")

        })
    })

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const handleMovieDB=(id)=>
    {

      // axios.get(`/movie/${id}/videos?language=en-US&=${Api_Key}`).then(response=>{
      //   if(response.data.results.length!==0){
      //     setUrlId(response.data.results[0])
      //   }
      // })
        console.log(id);
    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>

        {movies.map((obj)=>
        
        <img onClick={()=>handleMovieDB(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt="posters" src={`${Image_Url+obj.backdrop_path}`}/>

        )}

        
       
      </div>

      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}


    </div>
  )
}

export default RowPost