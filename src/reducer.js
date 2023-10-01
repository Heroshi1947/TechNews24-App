const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };
    case "NEXT_PAGE":
      let pageNumb = state.page + 1;

      if (pageNumb >= state.nbPages) {
        pageNumb = 0;
      } else {
        pageNumb = pageNumb;
      }
      return {
        ...state,
        page: pageNumb,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;

      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};
export default reducer;
