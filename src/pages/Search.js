import { useState } from "react";
import axios from "axios";
import styles from "./cssPage/Search.module.css";
import { BsSearch } from "react-icons/bs";
import { naver_ID, naver_PASS } from "../config";
export default function Search() {
  const [wordIdentify, setWordIdentify] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    const url =
      "/v1/search/encyc.json" + "?display=4" + "&query=" + String(wordIdentify);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "X-Naver-Client-Id": naver_ID,
          "X-Naver-Client-Secret": naver_PASS,
        },
      });

      setSearchResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <div className={styles.resOuter}>
            {searchResult &&
              searchResult.items.map((res, index) => (
                <div key={index} className={styles.resContainer}>
                  <h3
                    className={styles.resTitle}
                    dangerouslySetInnerHTML={{ __html: res.title }}
                  />
                  {res.thumbnail && (
                    <img
                      className={styles.resImg}
                      src={res.thumbnail}
                      alt="thumbnail"
                    />
                  )}
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
