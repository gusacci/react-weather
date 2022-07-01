import React from "react";
import "./Search.css";
import axios from "axios";

const Search = () => {
  return (
    <div>
      <form className="search">
        <input type="text" placeholder="Type a city ..." />
        <button type="submit">Search</button>
        <button>📍</button>
      </form>
    </div>
  );
};

export default Search;
