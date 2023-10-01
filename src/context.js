import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

// creating a context
const AppContext = React.createContext();

// create a provider function (must)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let API = "https://hn.algolia.com/api/v1/search?";

  const fecthApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      // isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  // to remove post

  const removePost = (postId) => {
    dispatch({ type: "REMOVE_POST", payload: postId });
  };

  // to use searchbar // to search post
  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  // ------------remember we can use any word inside dispatch instead of PAYLOAD ,its not a syntax --------------//

  // hnadling pagination buttons

  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  useEffect(() => {
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to make things easier
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };

// to use this context anywhere in app we need useContext hook
