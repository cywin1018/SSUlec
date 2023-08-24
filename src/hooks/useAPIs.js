import { useReducer, useEffect } from "react";
import { naver_ID, naver_PASS } from "../config";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}

function useNaver(search) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });

      const {
        data: { items },
      } = await axios.get("/v1/search/", {
        params: {
          query: search,
          display: 5,
        },
        headers: {
          "X-Naver-Client-Id": naver_ID,
          "X-Naver-Client-Secret": naver_PASS,
        },
      });

      dispatch({ type: "SUCCESS", data: items });
    } catch (err) {
      dispatch({ type: "ERROR", error: err });
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return state;
}

export default useNaver;
