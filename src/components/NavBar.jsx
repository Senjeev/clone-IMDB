import React from "react";
import Logo from "../assets/image/movie.png";
import { Link } from "react-router-dom"
 function NavBar() {
  return (
    <div className=" flex border  space-x-8 items-center pl-1 py-1 ">
      <img className="w-[45px] ml-2" src={Logo} alt=""></img>
      <Link className="text-blue-600 text-2xl font-sans hover:font-serif font-bold" to="movies">MOVIES</Link>
      <Link className="text-blue-600 text-2xl font-bold font-sans hover:font-serif" to="watchlist">WATCHLIST</Link>
    </div>
  );
}

export default NavBar;
