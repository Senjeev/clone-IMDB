import React, { useEffect, useState } from "react";
import id from "../Utility/genre"
function WatchList({ watchList,setWatchList,handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList,setGenreList]=useState(['All Genres']);
  const [currgenre,setGenre]=useState('All Genres')

  let handleFilter=(genre)=>{
    setGenre(genre)
  }
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let incsort=()=>{
    let inc=watchList.sort((moviea,movieb)=>{
      return moviea.vote_average-movieb.vote_average
    })
    setWatchList([...inc])
  }
  
  let decsort=()=>{
    let dec=watchList.sort((moviea,movieb)=>{
      return movieb.vote_average-moviea.vote_average
    })
    setWatchList([...dec])
  }
  useEffect(()=>{
    let temp= watchList.map((movieObj)=>{
      return id[movieObj.genre_ids[0]]
    })
    temp=new Set(temp)
    setGenreList(['All Genres',...temp])
  },[watchList])

  return (
    <>
      <div className="flex flex-wrap justify-center m-4 gap-4">
      {genreList.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={currgenre==genre?"w-[6rem] h-[3rem] bg-blue-400 rounded-lg flex justify-center text-white font-bold":"w-[6rem] h-[2rem] bg-gray-400 rounded-lg flex justify-center text-white font-bold"}>
         {genre}
        </div>
      })}

      </div>
      <div className="flex justify-center">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[5vh] w-[40vh] bg-gray-200 mt-2 rounded-lg"
          placeholder="Search Movies"
          type="text"
        />
      </div>
      <div className="m-8">
        <table className="w-full border border-bg-gray-500 overflow-hidden text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className=" flex justify-center">
                <div onClick={decsort} className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Ratings</div>
                <div onClick={incsort} className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if(currgenre=='All Genres'){
                return true
              }
              return id[movieObj.genre_ids[0]]==currgenre
            })
              .filter((movieobj) => {
                return movieobj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj, index) => (
                <tr className="border-b-2" key={index}>
                  <td className="flex items-center py-4 px-6">
                    <img
                      className="w-[8rem] h-[6rem]"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    />
                    <div className="mx-10">{movieObj.original_title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{id[movieObj.genre_ids[0]]}</td>
                  <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-600 cursor-pointer">Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
