import styles from "./cssPage/MyPage.module.css";
import { useState, useEffect } from "react";
import UseFetch from "../Components/UseFetch";
import axios from "axios";
import { createContext, useContext } from "react";
import { useUserContext } from "../Components/UserContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
export default function MyPage() {
  const { user } = useUserContext();
  const [wordData, setWordData] = useState([]);
  // const words = UseFetch(`http://localhost:8080/words`);
  // axios
  //   .get("http://localhost:8080/words/")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("에러 발생:", error);
  //   });
  // useEffect(() => {
  //   const fetchWordData = async () => {
  //     try {
  //       const docRef = doc(db, "word", "word");
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         setWordData(docSnap.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching document:", err);
  //     }
  //   };

  //   fetchWordData();
  // }, []);
  return (
    <>
      <div className={styles.Outer}>
        <h1 className={styles.title}>Ssulec</h1>
        <p className={styles.profile}>이메일 출력 공간{user.email}</p>
        <div className={styles.bookMark}>북마크 공간</div>
        <div className={styles.myWord}>
          <h3>내가 만든 단어장</h3>
          <ul>
            {wordData.map((word, index) => (
              <li key={index}>
                언어: {word.lau} / 단어: {word.word} / 뜻: {word.kor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
