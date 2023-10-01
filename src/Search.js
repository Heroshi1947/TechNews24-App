import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>
        Technical News <span>24x7</span>
      </h1>

      <form>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          ></input>
        </div>
      </form>
    </>
  );
};

export default Search;
