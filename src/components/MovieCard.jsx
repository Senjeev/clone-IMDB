import React from "react";

function MovieCard({
  movieobj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchList
}) {
  // Fixed the doesContain function to properly loop through the watchList
  function doesContain(movieobj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieobj.id) return true;
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieobj) ? (
        <div 
          onClick={() => handleRemoveFromWatchList(movieobj)} 
          className="h-8 w-8 flex justify-center items-center rounded-lg bg-gray-900/60">
          &#10060;
        </div>
      ) : (
        <div 
          onClick={() => handleAddtoWatchList(movieobj)} 
          className="h-8 w-8 flex justify-center items-center rounded-lg bg-gray-900/60">
          &#128525;
        </div>
      )}
      <div className="text-white text-xl w-full text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
