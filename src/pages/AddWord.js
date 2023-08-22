import styles from "./cssPage/AddWord.module.css";
import { useRef } from "react";
// import axios from "axios";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function AddWord() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const wordData = {
      lau: lauRef.current.value,
      word: wordRef.current.value,
      kor: korRef.current.value,
      isDone: false,
    };
    // axios
    //   .post(`http://localhost:8080/words/`, requestData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     if (res.status >= 200 && res.status < 300) {
    //       window.alert("생성이 완료되었습니다!");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("에러 발생:", error);
    //   });
    try {
      const docRef = doc(db, "wordData", "word");
      await setDoc(docRef, wordData);
      console.log("저장완료!");
    } catch (err) {
      console.log(err);
    }
  };
  const wordRef = useRef(null);
  const korRef = useRef(null);
  const lauRef = useRef(null);
  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>SSULEC</h1>
        <form className={styles.Word} onSubmit={onSubmit}>
          <div>
            <select className={styles.Select} ref={lauRef}>
              <option>언어설정</option>
              <option>스페인어</option>
              <option>독일어</option>
              <option>프랑스어</option>
            </select>
          </div>
          <div className={styles.Input}>
            <label>단어</label>
            <input placeholder="단어" ref={wordRef}></input>
          </div>
          <div className={styles.Input}>
            <label>뜻</label>
            <input placeholder="뜻" ref={korRef}></input>
          </div>
          <button className={styles.Save}>저장</button>
        </form>
      </div>
    </>
  );
}
