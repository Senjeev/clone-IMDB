import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Page from "./Page";
function Movies({handleAddtoWatchList,handleRemoveFromWatchList,watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo,setPageNo]=useState(1);

const handlePrev=()=>{
  if(pageNo==1){
    setPageNo(1)
  }
  else{
  setPageNo(pageNo-1)
}
}
const handleNext=()=>{
  setPageNo(pageNo+1)
}
  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ef18a13c6fb1919c8c5a7939828f65f3&language=en-US&page=${pageNo}`
    )
      .then(function (res) {
        setMovies(res.data.results);
      });
  } ,[pageNo] );

  return (
    <div className="p-5">
      <div className="font-bold text-center m-5 text-2xl border">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieobj) => {
            return <MovieCard key={movieobj.id} movieobj={movieobj} poster_path={movieobj.poster_path} name={movieobj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
        })}
      </div>
      <Page pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}
//https://api.themoviedb.org/3/movie/popular?api_key=ef18a13c6fb1919c8c5a7939828f65f3&language=en-US&page=1

export default Movies;
