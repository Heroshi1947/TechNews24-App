import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
