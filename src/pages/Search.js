import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./cssPage/Search.module.css";
import Logo from "../Components/Logo";
import { BsSearch } from "react-icons/bs";
import Dropdown from "../Components/Dropdown";
import useClose from "../Components/useClose";
export default function Search() {
  // const [wordList, setWordList] = useState([]);
  // const [search, setSearch] = useState("");
  const dropDownRef = useRef();
  const [wordIdentify, setWordIdentify] = useState("");
  const lexioLists = ["스페인어", "프랑스어", "독일어"];
  const [isOpen, setIsOpen] = useClose(dropDownRef, false);

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
            <input
              className={styles.wordInput}
              type="text"
              placeholder="단어를 입력하세요."
              // onChange={(e) => setSearch(e.target.value)}
            />
            <BsSearch className={styles.icon} />
          </div>
          {/* <p className={styles.List}>
            {wordList
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return <h4>{item.name}</h4>;
              })}
          </p> */}
        </section>
      </div>
    </>
  );
}
