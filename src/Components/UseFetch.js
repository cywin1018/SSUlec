import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        // 에러 처리를 원하는 경우 여기에 추가합니다.
        console.error("에러 발생:", error);
      });
  }, [url]);

  return data;
};

export default UseFetch;
