import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {}
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong"
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, Dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        Dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(error => {
        Dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
