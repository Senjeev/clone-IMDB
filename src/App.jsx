import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [watchList,setWatchList]=useState([]);



   let handleAddtoWatchList=(movieobj)=>{
    let newWatchList=[...watchList,movieobj]
    localStorage.setItem('movies',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
   }


   let handleRemoveFromWatchList=(movieobj)=>{
    let filtered=watchList.filter((movie)=>{
      return movie.id != movieobj.id
    })
    setWatchList(filtered);
    localStorage.setItem('movies',JSON.stringify(filtered))

   }


   useEffect(()=>{
   let moviesstorage=localStorage.getItem('movies')
   if(!moviesstorage){ return
   }
   setWatchList(JSON.parse(moviesstorage))
   },[])
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/movies" element={<><Banner /> <Movies  handleAddtoWatchList={handleAddtoWatchList}  handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/></> }/>          
          <Route path="/watchlist" element={<WatchList  watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>
          
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
