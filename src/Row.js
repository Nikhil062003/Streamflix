import React,{useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const  baseURL="https://image.tmdb.org/t/p/original/"


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies]=useState([]);
    const [trailerUrl,settrailerUrl]=useState("");
    
       



   useEffect(()=>{
// if[], run i=once when the row loads,and do run again on page  load only 
   
   async function fetchData(){
    const request= await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
 }

   fetchData(); 

   },[fetchUrl]);
console.log(movies);  



  const opts={
    height:"390",
    width:"100%",
    playerVars:{
        autoplay:1,
    },
  };


  const handleClick=(movie)=> {
        if (trailerUrl) {
            settrailerUrl(""); 
        } else {
            movieTrailer(movie?.name|| "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    settrailerUrl(urlParams.get('v'));

                })
                .catch((error) => {
                    console.log(error);
                    // settrailerUrl("");
                });
        };
    }
 

  return  (
  <div className='row'>
   <h2>{title}</h2>
   
   <div className='row__posters'>

{
    movies.map(
        (movie)=>(
           (( isLargeRow && movie.poster_path) || 
           ( !isLargeRow && movie.poster_path)) &&(
            <img 
                key={movie.id}
                className={`row__poster ${isLargeRow &&'row__posterLarge'}`} 
                onClick={()=> handleClick(movie)}
                src={`${baseURL}${
                    isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                alt={movie.name}
                />
            )

       
    ))
}
     
   </div>

   {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

  </div>
  )
}

export default Row