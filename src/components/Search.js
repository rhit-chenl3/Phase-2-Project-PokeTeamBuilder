import React from "react";

function Search({search, handleSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  type="text" onChange={handleSearch} value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
