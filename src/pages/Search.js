import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./cssPage/Search.module.css";
import Logo from "../Components/Logo";
import { BsSearch } from "react-icons/bs";
import Dropdown from "../Components/Dropdown";
import useClose from "../Components/useClose";
import useNaver from "../hooks/useAPIs";
import { naver_ID, naver_PASS } from "../config";
export default function Search() {
  // const [wordList, setWordList] = useState([]);
  // const [search, setSearch] = useState("");
  // const state = useNaver(search);
  // const { loading, data, error } = state;

  const [wordIdentify, setWordIdentify] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "/v1/search/encyc.json" + "?query=" + String(wordIdentify);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "X-Naver-Client-Id": naver_ID,
          "X-Naver-Client-Secret": naver_PASS,
        },
      });
      console.log(response);
      setSearchResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=30").then((response) => {
  //     setWordList(response.data.results);
  //     // console.log(response);
  //   });
  // }, []);

  return (
    <>
      <div className={styles.content}>
        <section className={styles.bodyControl}>
          <h1 className={styles.Logo}>SSULEC</h1>

          <div className={styles.searchBar}>
            <form onSubmit={onSubmit}>
              <input
                className={styles.wordInput}
                type="text"
                placeholder="단어를 입력하세요."
                onChange={(e) => setWordIdentify(e.target.value)}
              />
              <button type="submit">
                <BsSearch className={styles.icon} />
              </button>
            </form>
          </div>
          <ul id="storeList">
            {/*            
            {searchResult && (
              <li>{`검색결과 ${searchResult.data.items[0]}`}</li>
            )} */}
          </ul>
        </section>
      </div>
    </>
  );
}
